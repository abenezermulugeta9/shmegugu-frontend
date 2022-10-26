import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Project from 'src/app/models/IProject';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root',
})
export class ApproveService {
  project_id!: string;
  project!: Project;
  private URL = environment.SERVER_URL;

  constructor(
    private http: HttpClient,
  ) {}

  approve(project_id: string, app_id: string) {
    return this.http.patch(
      `${this.URL}projects/${project_id}/approve/applications/${app_id}`,
      null
    );
  }
}
