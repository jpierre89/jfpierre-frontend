import { Component, ViewChild } from '@angular/core';
//import {MatButtonModule} from '@angular/material/button'; 
//import {MatButtonToggleModule} from '@angular/material/button-toggle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('splash') splash;
  @ViewChild('about') about;
  @ViewChild('projects') projects;

  title = 'frontend';

  // Ordered section DOM elements.
  sections : any[];

  // Scroll to section settings.
  // Doesnt work on all devices
  scrollSettings = {
    behavior: "smooth",
    block: "start",
    inline: "nearest"
  };

  constructor(){}

  ngAfterViewInit() {
    this.sections = [
      this.splash.nativeElement,
      this.about.nativeElement,
      this.projects.nativeElement
    ];
  }

  sectionBoundedByViewport(section) {
    const bound = section.getBoundingClientRect();
    if (bound.top < 0) {
      return false;
    }
    else if (bound.bottom > window.innerHeight) {
        return false;
    }
    else {
      return true;
    }
  }

  scrollToElement(element): void {
    element.scrollIntoView(this.scrollSettings);
  }

  canSnapUp(section) {
    const bound = section.getBoundingClientRect();
    return bound.top >= 0; // Top of section is inside viewport
  }

  canSnapDown(section) {
    const bound = section.getBoundingClientRect();
    return bound.bottom <= window.innerHeight  // Bottom of section is inside viewport
  }
  
  scrollSnapToSection(event: WheelEvent): void {
    event.stopPropagation();
    
    const elementScrolledOn = event.target;

    // Get section that was scrolled on.
    let sectionScrolledOn = null;
    for (let section of this.sections) {
      if (section.contains(elementScrolledOn || section == elementScrolledOn)) {
        sectionScrolledOn = section;
        break
      }
    }

    if (sectionScrolledOn != null) {

      // Can this section possibly fit the viewport screen?      
      const bound = sectionScrolledOn.getBoundingClientRect();

      if (bound.height > window.innerHeight) {
        return; // no snap to section
      }

      // Snap decision made by current section viewport fit
      const currentIndex = this.sections.indexOf(sectionScrolledOn);
      const firstSection = this.sections[0];
      const lastSection = this.sections[this.sections.length - 1]
      const scrollDown: Boolean = event.deltaY > 0 ? true : false;

      if (scrollDown) {
        if (this.canSnapDown(sectionScrolledOn)) {
          if (sectionScrolledOn !== lastSection) {
            this.scrollToElement(this.sections[currentIndex + 1]);
            event.preventDefault();
          }
        }
        else {
          this.scrollToElement(this.sections[currentIndex]);
          event.preventDefault();
        }
      }
      else {
        if (this.canSnapUp(sectionScrolledOn)) {
          if (sectionScrolledOn != firstSection) {
            this.scrollToElement(this.sections[currentIndex - 1]);
            event.preventDefault();
          }
        }
        else {
          this.scrollToElement(this.sections[currentIndex]);
          event.preventDefault();
        }
      }
      //if (this.sectionBoundedByViewport(sectionScrolledOn)) {
      //}
      //else {
        // Viewport is not big enough to display full-page content
        //document.body.style.overflowY = "scroll";
      //}
    }
  }

  test($event) {
    console.log("WORKED");
  }

}






  /*
  getWidth() {
    return window.innerWidth
  }

  // undefined on phones
  getHeight() {
    return window.innerHeight
  }

  disableRegularScroll(event) {
    event.preventDefault();
  }



  // Viewport display large enough to snap scroll.
  isSectionInViewport(section) {
    const bound = section.getBoundingClientRect();
    // console.log(bound);
    if (bound.top < 0) {
      return false;
    }
    else if (bound.bottom > this.getHeight()) {
        return false;
    }
    else {
      return true;
    }
  }
  */