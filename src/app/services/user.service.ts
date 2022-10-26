import IState from 'src/app/models/IState';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import IUser from '../models/IUser';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private URL = environment.SERVER_URL;

  constructor(private http: HttpClient) { }

  getUserById(id: string) {
    return this.http.get<IUser>(this.URL + '/users/' + id);
  }

  updateUser(id: string, obj: IState) {
    return this.http.patch<IState>(this.URL + '/users/' + id, obj);
  }
}
