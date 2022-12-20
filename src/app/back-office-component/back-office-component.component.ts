import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-back-office-component',
  templateUrl: './back-office-component.component.html',
  styleUrls: ['./back-office-component.component.scss']
})
export class BackOfficeComponentComponent {

  constructor (public userService : UserService, private router : Router) {}

}
