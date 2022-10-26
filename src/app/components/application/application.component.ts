import { ApplicationService } from '../../services/application-service.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css'],
})
export class ApplicationComponent implements OnInit {


  id!:string
  constructor(private appService:ApplicationService) {}
   min_stake =this.appService.project.minimum_stake
  ngOnInit(): void {
    this.id = this.appService.project_id
  }
}
