import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private userService: UserService, private router: Router) {}

  onSubmit(credentials: any) {
    this.userService.login(credentials).subscribe({
      next: (data) => {
        console.log(data)
        localStorage.setItem('token', data['access_token'])
        this.userService.setLogin()
        this.router.navigateByUrl('back-office')
      },
      error: (error) => {
        console.log(error)
      }
    })
  }
}
