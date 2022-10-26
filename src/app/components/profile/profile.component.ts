import { HomeComponent } from './../home/home.component';
import { HeaderComponent } from './../header/header.component';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from './../../services/user.service';
import { Component, OnChanges, OnInit, SimpleChanges, AfterViewInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import IUser from 'src/app/models/IUser';
import IState from 'src/app/models/IState';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user!: IUser;
  userId!: string;
  updateProfileForm: FormGroup;
  selectedImage: any;

  APP_STATE!: IState;

  @Output() stateUpdaterEvent = new EventEmitter<IState>();

  constructor(
    public dialog: MatDialog,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private authService: AuthService) {
    this.updateProfileForm = formBuilder.group({
      firstname: ['', [Validators.required, Validators.maxLength(25)]],
      lastname: ['', [Validators.required, Validators.maxLength(25)]],
      address: ['', [Validators.required]],
      phone: ['', [Validators.required, , Validators.maxLength(15)]],
      email: ['', [Validators.required, Validators.email]],
    });

    this.userService.getUserById(this.userId).subscribe(result => {
      this.user = result;
    });
  }

  ngOnInit(): void {
    console.log('onInit called')
    this.authService.state.subscribe((state: IState) => {
      this.APP_STATE = state;
    });
  }

  updateProfile() {
    const tokenInLocal = localStorage.getItem('loggedUser');
    if (tokenInLocal) {
      const parsedData = JSON.parse(tokenInLocal);
      this.userId = parsedData._id;
    }

    this.userService.updateUser(this.userId, this.updateProfileForm.value).subscribe(result => {
      this.toastr.success('You have updated your profile successfully.');
      this.authService.state.next(result);
      this.stateUpdaterEvent.emit(result);
      // console.log(result)
    },
    error => {
      this.toastr.error(error.message)
    });
  }

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    const dialogRef = this.dialog.open(ProfileComponent, {
      width: '30%',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  onFileSelected(event: any): void {
    this.selectedImage = event.target.files[0] ?? null;
    const reader = new FileReader();
  }

}
