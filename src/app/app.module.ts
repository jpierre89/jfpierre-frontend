import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule} from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplashComponent } from './components/splash/splash.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material and CDK
import { MatRippleModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle'; 

import {CdkScrollableModule} from '@angular/cdk/scrolling';

@NgModule({
  // Every component must be declared here.
  // CLI automatically puts CLI-created componenets here.
  declarations: [
    AppComponent,
    SplashComponent
  ],
  // Every module (import) of project must be declared here.
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,

    // Material and CDK
    MatRippleModule,
    MatButtonModule,
    MatButtonToggleModule,

    CdkScrollableModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
