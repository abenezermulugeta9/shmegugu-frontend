import { ProjectListService } from '../../services/project-list-service.service';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-applications-list',
  templateUrl: './applications-list.component.html',
  styleUrls: ['./applications-list.component.css'],
})
export class ApplicationsListComponent implements OnInit {
  dataSource!: any;
  title!: string;
  data = [];
  applications: any;
  @Input() app_id!:string
  constructor(
    private http: HttpClient,
    private proListService: ProjectListService
  ) {}
  index = 0;
  ngOnInit(): void {
    this.dataSource = this.proListService.applications

     }
  displayedColumns: string[] = ['Investor Name', 'Offer', 'Status', 'Action'];


}
