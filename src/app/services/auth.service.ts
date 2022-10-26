import jwt_decode from 'jwt-decode';
import { state } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import IState from '../models/IState';
import IUser from '../models/IUser';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = environment.SERVER_URL;

  state: BehaviorSubject<IState> = new BehaviorSubject({
    _id: '',
    email: '',
    firstname: '',
    lastname: '',
    role: '',
    token: ''
  });

  constructor(private http: HttpClient) {
  }

  login(obj: { email: string, password: string }) {
    return this.http.post<{ success: boolean, token: string }>(this.URL + 'login', obj);
  }

  register(obj: IUser) {
    return this.http.post<{ message: string, user: IUser }>(this.URL + 'register', obj);
  }
}
