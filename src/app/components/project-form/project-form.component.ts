import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ProjectFormService } from './../../services/project-form.service';
import { AuthService } from './../../services/auth.service';

import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {
  // hide = true
  createProjectForm!: FormGroup;
  selectedImage: any;

  floatLabelControl = new FormControl('auto' as FloatLabelType);
  selectedFile: any = null;

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] ?? null;
    const reader = new FileReader();

  if(event.target.files && event.target.files.length) {
    const [file] = event.target.files;
    this.selectedImage = event.target.files[0];


    // To show picture in browser
    // reader.readAsDataURL(file);
    // reader.onload = () => {
    //   this.imageSrc = reader.result as string;
    //   this.foodForm.patchValue({
    //     image: reader.result
    //   });
    // };
  }

  }


  options = this._formBuilder.group({
    floatLabel: this.floatLabelControl,
  });
  constructor(private _formBuilder: FormBuilder,
    private projectFormService: ProjectFormService,
    private router: Router,
    private toastr: ToastrService,
    private authService: AuthService ) {
      this.createProjectForm = _formBuilder.group({
        amount: ['', [Validators.required, Validators.maxLength(25)]],
        title: ['', [Validators.required, Validators.maxLength(25)]],
        address: ['', [Validators.required]],
        description: ['', [Validators.required]],
        deadline: ['', [Validators.required, Validators.maxLength(8)]],
        imageUrl: ['', [Validators.required]],
        target: ['', [Validators.required, Validators.maxLength(15)]],
        stage: ['', [Validators.required]],
        fundingType: ['', [Validators.required]],
        category: ['', [Validators.required]]
      });
   }

  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }

  createProject() {
    const data = this.createProjectForm.value;
    const formData = new FormData();
    
    let goal={"target":data.target,"deadline":data.deadline};



      formData.append("image", this.selectedImage);
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("address", data.address);
      formData.append("stage", data.stage);
      formData.append("goal", JSON.stringify(goal));
      formData.append("funding_type", data.fundingType);
      formData.append("category", data.category);
      formData.append("minimum_stake", data.amount);
      formData.append("owners", JSON.stringify(this.authService.state.value))
      //formData.append("lastname", this.authService.state.value?.lastname);
     // formData.append("email", this.authService.state.value?.email);
     // formData.append("target", data.target);
     // formData.append("target", data.target);

    //this.createProjectForm.value
    this.projectFormService.createProject(formData).subscribe(res => {
      this.toastr.success('Campaign created');

    },
    error => {
      this.toastr.error(error.message)
     }
     );
  }

  ngOnInit(): void {
  }

}
