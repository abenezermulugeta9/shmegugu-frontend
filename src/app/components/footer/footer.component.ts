import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import IState from 'src/app/models/IState';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  user: any;

  APP_STATE: IState = {
    _id: '',
    email: '',
    firstname: '',
    lastname: '',
    role: '',
    token: '',
  };
  constructor(private router: Router, private authService: AuthService) {
    const stringified_app_state = localStorage.getItem('token');
    if (stringified_app_state) {
      const plainToken = JSON.parse(stringified_app_state);
      this.authService.state.next(plainToken);
      this.APP_STATE = plainToken;
    }
  }

  isLoggedIn: boolean = false;

  ngOnInit(): void {
    this.authService.state.subscribe((state: IState) => {
      this.APP_STATE = state;
    });
  }

  gotosignup(){
    this.router.navigate(['/', 'register']);
}

myProjects() {
  this.router.navigateByUrl('/projects');
}

findProjectsNearby() {
  this.router.navigateByUrl('/projects-nearby');
}
}
