import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SplashComponent } from './components/splash/splash.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TheaterComponent } from './components/theater/theater.component';

const routes: Routes = [
  { path: '', component: SplashComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/theater', component: TheaterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
