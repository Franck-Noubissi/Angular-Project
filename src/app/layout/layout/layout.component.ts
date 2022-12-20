import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  constructor (public userService: UserService, private router: Router) {}

  logout() {
    this.userService.logout()
    this.router.navigateByUrl('login')
  }

}
