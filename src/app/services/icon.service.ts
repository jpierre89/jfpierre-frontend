import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class IconService {

  constructor( 
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {}

  init() {
    this.matIconRegistry.addSvgIcon(
      'angular',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/angular.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'celery',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/celery.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'cplusplus',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/cplusplus.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'css3',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/css3.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'django',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/django.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'docker',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/docker.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'flask',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/flask.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'git',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/git.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'github',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/github.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'gmail',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/gmail.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'html5',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/html5.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'java',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/java.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'javascript',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/javascript.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'jp',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/jp.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'linkedin',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/linkedin.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'linux',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/linux.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'nginx',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/nginx.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'postgresql',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/postgresql.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'python',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/python.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'rabbitmq',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/rabbitmq.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'typescript',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/typescript.svg')
    );
  }
  
}
