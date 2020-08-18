import { Component, ViewChild } from '@angular/core';
import { IconService } from './services/icon.service';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent {

  constructor(
    private iconService: IconService
  ) {
    this.iconService.init();
  }

  prepareRoute(outlet: RouterOutlet) {
    /*  returns a string value representing the state of the animation
        based on the custom data of the current active route, to control
        which transition to execute for each route.
    */
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}

