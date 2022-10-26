import { ProfileComponent } from './../profile/profile.component';
import jwt_decode from 'jwt-decode';
import { AuthService } from './../../services/auth.service';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import IState from 'src/app/models/IState';
import { ApplicationComponent } from '../application/application.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  token!: string;

  APP_STATE: IState = {
    _id: '',
    email: '',
    firstname: '',
    lastname: '',
    role: '',
    token: '',
  };

  constructor(private router: Router, private authService: AuthService, public dialog: MatDialog) {
    const tokenInLocal = localStorage.getItem('loggedUser');
    if (tokenInLocal) {
      const parsedData = JSON.parse(tokenInLocal);
      this.authService.state.next(parsedData);
      this.APP_STATE = parsedData;
    }
  }

  ngOnInit(): void {
    this.authService.state.subscribe((state: IState) => {
      this.APP_STATE = state;
    });
  }

  logout() {
    this.authService.state.next({
      _id: '',
      email: '',
      firstname: '',
      lastname: '',
      role: '',
      token: '',
    });
    localStorage.clear();
    this.router.navigateByUrl('');
  }

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(ProfileComponent, {
      width: '30%',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
