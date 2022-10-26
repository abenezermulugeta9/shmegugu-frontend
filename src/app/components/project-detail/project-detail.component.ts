import { ApplicationService } from '../../services/application-service.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService } from 'src/app/services/projects.service';
import { ApplicationComponent } from '../application/application.component';
@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
})
export class ProjectDetailComponent implements OnInit {
  projectId!: string;
  project: any;
  constructor(
    private projectsService: ProjectsService,
    private appService:ApplicationService,
    private router: Router,
    public dialog: MatDialog,
    private activatedRoute: ActivatedRoute
  ) {}
  gotoapply() {
    this.router.navigate(['/', 'apply']);
  }
  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe((params) => {
      this.projectId = params.get('id') as string;
      // this.appService.project_id=this.projectId
    });
    this.projectsService.getProjectById(this.projectId).subscribe((res) => {
      this.project = res[0];
      this.appService.project=this.project

    });
  }

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(ApplicationComponent, {
      width: '30%',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
