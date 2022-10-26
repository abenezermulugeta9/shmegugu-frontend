import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private URL = environment.SERVER_URL;

  constructor(private http: HttpClient) { }

  getNearByProjects(id: string) {
    return this.http.get<[]>(this.URL + 'nearby/projects/' + id);
  }
}
