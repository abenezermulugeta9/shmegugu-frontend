import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Project from 'src/app/models/IProject';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class RejectService {
  project_id!: string;
  project!: Project;
  private URL = environment.SERVER_URL;

  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private location: Location
  ) {}


  reject(project_id: string, app_id: string) {
   return this.http
      .patch(
        `${this.URL}projects/${project_id}/reject/applications/${app_id}`,
        null
      )

  }
}
