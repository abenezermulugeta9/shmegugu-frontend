import { ProjectListService } from '../../services/project-list-service.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
})
export class ProjectListComponent implements OnInit {
  page = 1;
  projects = [];
  user: any;
  own_id!:string
  constructor(
    private http: HttpClient,
    private router: Router,
    private prolist: ProjectListService
  ) {}

  ngOnInit(): void {

    this.prolist.projectlist(
      JSON.parse(localStorage.getItem('loggedUser') as string)._id
    ).subscribe(p=>this.projects=p)

  }
}
