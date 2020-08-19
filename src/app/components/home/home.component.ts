import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { EmailDialogComponent } from '../email-dialog/email-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  showEmail(): void {
    this.dialog.open(EmailDialogComponent, {
      width: '250px',
    });
  }
}
