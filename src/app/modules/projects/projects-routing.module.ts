import { NearbyProjectsComponent } from './../../components/nearby-projects/nearby-projects.component';
import { ApplicationComponent } from '../../components/application/application.component';
import { ProjectFormComponent } from './../../components/project-form/project-form.component';
import { ProjectDetailComponent } from './../../components/project-detail/project-detail.component';
import { ProjectListComponent } from './../../components/project-list/project-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { AuthGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
  { path: 'projects', component: ProjectListComponent, title: 'Projects', canActivate: [AuthGuard] },
  { path: 'project', component: ProjectDetailComponent, title: 'Project', canActivate: [AuthGuard] },
  { path: 'project-form', component: ProjectFormComponent, title: 'Create project', canActivate: [AuthGuard] },
  { path: 'apply', component: ApplicationComponent, title: 'Funding requests', canActivate: [AuthGuard] },
  { path: 'projects-nearby', component: NearbyProjectsComponent, title: 'Nearby Projects', canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
