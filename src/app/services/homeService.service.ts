import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root',
})
export class HomeService {
  project_id!: string;
  projects!: [];
  private URL = environment.SERVER_URL;

  constructor(
    private http: HttpClient,

  ) {}

  projectlist() {
    return this.http.get<[]>(this.URL + '/projects')
}
}
