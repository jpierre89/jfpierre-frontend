import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  title: string = "Projects"

  constructor(private titleService: Title) {
    this.titleService.setTitle(this.title);
  }

  ngOnInit(): void {
  }

}
