import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule} from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// Material and CDK
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule} from '@angular/material/icon';


// Components
import { HeaderComponent } from './components/header/header.component';
import { SplashComponent } from './components/splash/splash.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TheaterComponent } from './components/theater/theater.component';
import { TheaterCardComponent } from './components/theater-card/theater-card.component';


@NgModule({
  // Every component must be declared here.
  // CLI automatically puts CLI-created components
  declarations: [
    AppComponent,
    SplashComponent,
    AboutComponent,
    HeaderComponent,
    ProjectsComponent,
    TheaterComponent,
    TheaterCardComponent
  ],
  // Every module (import) of project must be declared here.
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule, // ma
    AppRoutingModule,
    FlexLayoutModule,

    // Material and CDK
    MatRippleModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatIconModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
