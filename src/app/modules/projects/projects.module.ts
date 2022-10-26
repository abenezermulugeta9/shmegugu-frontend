import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';

import { ProjectDetailComponent } from '../../components/project-detail/project-detail.component';
import { ProjectFormComponent } from '../../components/project-form/project-form.component';

// Material Form Controls
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
// Material Navigation
import { MatMenuModule } from '@angular/material/menu';
// Material Layout
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
// Material Buttons & Indicators
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatNativeDateModule } from '@angular/material/core';
// Material Popups & Modals
import { MatDialogModule } from '@angular/material/dialog';
// Material Data tables
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectDetailComponent,
    ProjectFormComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    ReactiveFormsModule,
    // MatModules
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatMenuModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatDialogModule,
    MatPaginatorModule,
    MatTableModule
  ],
})
export class ProjectsModule {}
