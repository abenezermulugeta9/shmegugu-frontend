import { HomeService } from '../../services/homeService.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import IState from 'src/app/models/IState';


interface project {}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  APP_STATE: IState = {
    _id: '',
    email: '',
    firstname: '',
    lastname: '',
    role: '',
    token: '',
  };

  page = 1;
  projects = [];
  token: any;
  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService,
    private homeService: HomeService
  ) {
    const tokenInLocal = localStorage.getItem('loggedUser');
    if (tokenInLocal) {
      const parsedData = JSON.parse(tokenInLocal);
      this.authService.state.next(parsedData);
      this.APP_STATE = parsedData;
    }
  }

  ngOnInit(): void {
   this.homeService.projectlist().subscribe(p=>this.projects=p)
    this.token = localStorage.getItem('token');
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
