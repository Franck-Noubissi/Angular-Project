import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  constructor(private userService: UserService, private router: Router) {}

  onSubmit() {
    console.log(this.loginForm.value)
    let credentials = {...this.loginForm.value}
    this.userService.login(credentials).subscribe({
      next: (data) => {
        console.log(data)
        this.userService.setLogin()
        this.router.navigateByUrl('back-office')
      },
      error: (error) => {
        console.log(error)
      }
    })
  }
}
