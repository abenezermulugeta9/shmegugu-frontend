import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private URL = environment.SERVER_URL;

  constructor(private http: HttpClient) { }

  getProjectById(id: string) {
    return this.http.get<[{}]>(this.URL + 'projects/' + id);
  }
}
