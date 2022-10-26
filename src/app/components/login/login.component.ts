import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import jwt_decode from 'jwt-decode';
import IState from 'src/app/models/IState';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.loginForm = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  login() {
    this.authService.login(this.loginForm.value).subscribe(res => {
      if (res.success) {
        const plainToken = jwt_decode(res.token) as IState;

        const currentState = {
          _id: plainToken._id,
          email: plainToken.email,
          firstname: plainToken.firstname,
          lastname: plainToken.lastname,
          role: plainToken.role,
          token: res.token
        }

        this.authService.state.next(currentState);
        localStorage.setItem('token', JSON.stringify(currentState));
        localStorage.setItem('loggedUser', JSON.stringify(currentState));
        this.router.navigateByUrl('');
      }
    }, err => {
      this.toastr.error(err.message)
    });
  }
}
