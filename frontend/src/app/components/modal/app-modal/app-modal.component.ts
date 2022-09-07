import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAnimationsExampleDialogComponent } from '../dialog-animations-example-dialog/dialog-animations-example-dialog.component';

@Component({
  selector: 'app-app-modal',
  templateUrl: './app-modal.component.html',
  styleUrls: ['./app-modal.component.css']
})
export class AppModalComponent {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogAnimationsExampleDialogComponent);
  }

}
