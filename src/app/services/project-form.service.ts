import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import IProject from '../models/IProject';
import { environment } from 'src/environments/environment.prod';



@Injectable({
  providedIn: 'root'
})
export class ProjectFormService {

  private URL = environment.SERVER_URL;



  constructor(private http: HttpClient) { }

  createProject(obj: any) {
    return this.http.post<{ message: string, project: any }>(`${this.URL}projects/uploadImage`, obj);
  }
}
