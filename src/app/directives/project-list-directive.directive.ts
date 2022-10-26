import Project from 'src/app/models/IProject';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProjectListService } from '../services/project-list-service.service';

@Directive({
  selector: '[projectListDirective]',
})
export class ProjectListDirective {
  id!: any;
  user: any;
  apps:any
  @Input('p') project !: Project;
  constructor(
    private http: HttpClient,
    private proListService: ProjectListService,
    private toastr: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  @HostListener('click') viewApplication() {
    this.proListService.applications = this.project.applications;
    this.proListService.project_id=this.project._id
    this.router.navigate(['/', 'applications']);

  }
}
