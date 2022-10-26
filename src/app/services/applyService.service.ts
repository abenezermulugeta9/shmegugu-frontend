
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Project from 'src/app/models/IProject';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common'
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class ApplyService {
  project_id!: string;
  project!: Project;
  private URL = environment.SERVER_URL;
  constructor(private http: HttpClient, private toastr: ToastrService,
    private location: Location,) { }

  apply(id: string, investor: {}) {

    this.http
      .patch(
        `${this.URL}projects/${id}/apply`,
        investor
      )
      .subscribe(
        (r) => {
          this.toastr.success(
            'You application is Successfully submited');
          setTimeout(() => this.location.back(), 1000)

        },
        (error) => {
          this.toastr.error(error.message);
        }
      );
  }
}


