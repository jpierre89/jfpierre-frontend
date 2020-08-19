import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';


const routes: Routes = [
  { path: '', component: HomeComponent, data: {animation: 'HomePage'} },
  { path: 'projects', component: ProjectsComponent, data: {animation: 'ProjectsPage'} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
