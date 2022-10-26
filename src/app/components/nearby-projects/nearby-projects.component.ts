import { MapService } from './../../services/map.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nearby-projects',
  templateUrl: './nearby-projects.component.html',
  styleUrls: ['./nearby-projects.component.css']
})
export class NearbyProjectsComponent implements OnInit {

  userId!: string;
  projects = [];
  page = 1;

  constructor(private mapService: MapService) { }

  ngOnInit(): void {
    const tokenInLocal = localStorage.getItem('loggedUser');
    if (tokenInLocal) {
      const parsedData = JSON.parse(tokenInLocal);
      this.userId = parsedData._id;
    }

    this.mapService.getNearByProjects(this.userId).subscribe(result => this.projects = result);
  }
}
