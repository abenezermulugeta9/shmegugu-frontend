import { ApplicationsListComponent } from './components/applications-list/applications-list.component';
import { ErrorComponent } from './components/error/error.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { ProjectsRoutingModule } from './modules/projects/projects-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationComponent } from './components/application/application.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  { path: 'login', component: LoginComponent, title: 'Login' },
  { path: 'register', component: RegistrationComponent, title: 'Registration' },
  { path: 'apply', component: ApplicationComponent, title: 'Back This Project', canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, title: 'Profile', canActivate: [AuthGuard] },
  { path: 'applications', component: ApplicationsListComponent, title: 'applications', canActivate: [AuthGuard] },
  { path: 'projects', loadChildren: () => import('./modules/projects/projects.module').then( (m) => m.ProjectsModule), title: 'Projects' },
  { path: '**', redirectTo: 'page-not-found' },
  { path: 'page-not-found', component: ErrorComponent, title: 'Page not found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ProjectsRoutingModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
