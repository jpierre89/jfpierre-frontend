
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule} from '@angular/flex-layout';

// Material and CDK
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule} from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import {MatDialogModule} from '@angular/material/dialog'; 

// Components
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TheaterCardComponent } from './components/theater-card/theater-card.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { EmailDialogComponent } from './components/email-dialog/email-dialog.component';


@NgModule({
  // Every component must be declared here.
  // CLI automatically puts CLI-created components
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectsComponent,
    TheaterCardComponent,
    HomeComponent,
    FooterComponent,
    EmailDialogComponent
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
    MatIconModule,
    MatTooltipModule,
    MatDividerModule,
    MatChipsModule,
    MatDialogModule,
  ],
  providers: [
    Title,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
