import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  @Output() credentials = new EventEmitter<{email?: string | null | undefined, password?: string | null | undefined}>

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  constructor() {}

  onSubmit() {
    console.log(this.loginForm.value)
    let credentials = {...this.loginForm.value}
    this.credentials.emit(credentials)
  }
}
