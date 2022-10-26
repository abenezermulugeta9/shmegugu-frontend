import { ApproveService } from '../services/approve-Service.service';
import Project from 'src/app/models/IProject';
import { HttpClient } from '@angular/common/http';
import { Directive, HostListener, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProjectListService } from '../services/project-list-service.service';

@Directive({
  selector: '[approveDirective]',
})
export class ApproveDirective {


  @Input() app_id!: any;
  constructor(
    private proListService: ProjectListService,
    private toastr: ToastrService,
    private approveService:ApproveService



  ) {}

  @HostListener('click') approve() {

   this.approveService
     .approve(this.proListService.project_id, this.app_id)
     .subscribe(
       (r) => {
         this.toastr.success('Offer accepted');
       },
       (error) => {
         this.toastr.error(error.message);
       }
     );
}
}
