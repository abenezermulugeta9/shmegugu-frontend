import Project from 'src/app/models/IProject';
import { ApplyService } from '../services/applyService.service';
import {ApplicationService } from '../services/application-service.service';
import { HttpClient } from '@angular/common/http';
import { Directive, HostListener, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common'

@Directive({
  selector: '[applyDirective]',
})
export class ApplyDirective {
  applyDirective!: string;
  id!: string;
  project!:Project
  @Input('offer') offer!: string;
  user: any;
  investor = {};

  constructor(
    private http: HttpClient,
    private appService: ApplicationService,
    private toastr: ToastrService,
    private location:Location,
    private applyService:ApplyService

  ) {}

  @HostListener('click') apply() {

    this.user = JSON.parse(localStorage.getItem('loggedUser') as string);
    this.id = this.appService.project._id;
    this.project=this.appService.project
    this.investor = {
      investor: {
        firstname: this.user.firstname,
        lastname: this.user.lastname,
        location: this.user.location,
        email: this.user.email,
      },
      status: 0,
      Offer: this.offer,
    };
    this.applyService.apply(this.id,this.investor)
  }


}
