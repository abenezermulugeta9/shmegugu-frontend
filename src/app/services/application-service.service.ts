import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Project from 'src/app/models/IProject';

@Injectable({
  providedIn: 'root',
})
export class ApplicationService {
    project_id!:string
    project!:Project
    constructor(private http: HttpClient) {}
   
}
