import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { EmailDialogComponent } from '../email-dialog/email-dialog.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title: string = "Jon Pierre"

  constructor(
    private titleService: Title,
    public dialog: MatDialog
    ) {
      this.titleService.setTitle(this.title);
    }

  ngOnInit(): void {
  }

  showEmail(): void {
    this.dialog.open(EmailDialogComponent, {
      width: '250px',
    });
  }
}
