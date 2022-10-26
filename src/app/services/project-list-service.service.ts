import { Injectable, OnInit } from '@angular/core';
import Project from 'src/app/models/IProject';
import ApplicationsD from 'src/app/models/IApp';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root',
})
export class ProjectListService {
  project!: Project;
  applications!: any;
  project_id!: string;
  projects!:[]
  private URL = environment.SERVER_URL;

  constructor(private http: HttpClient) {}

  projectlist(own_id: string) {
   return this.http
      .get<[]>(`${this.URL}projects/owners/${own_id}`)

  }
}
