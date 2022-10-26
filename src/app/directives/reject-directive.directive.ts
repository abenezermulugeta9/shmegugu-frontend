import { RejectService } from '../services/reject-Service.service';
import Project from 'src/app/models/IProject';
import { HttpClient } from '@angular/common/http';
import { Directive, HostListener, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProjectListService } from '../services/project-list-service.service';

@Directive({
  selector: '[rejectDirective]',
})
export class RejectDirective {
  @Input() app_id!: any;
  constructor(
    private proListService: ProjectListService,
    private toastr: ToastrService,
    private http: HttpClient,
    private rejectService: RejectService
  ) { }

  @HostListener('click') reject() {

    this.rejectService
      .reject(this.proListService.project_id, this.app_id)
      .subscribe(
        (r) => {
          this.toastr.success('Offer rejected');
        },
        (error) => {
          this.toastr.error(error.message);
        }
      );
  }
}

