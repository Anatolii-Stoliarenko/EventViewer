import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-detail-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './event-detail-dialog.component.html',
  styleUrls: ['./event-detail-dialog.component.scss'],
})
export class EventDetailDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<EventDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  close(): void {
    this.dialogRef.close(); // Zamknięcie dialogu
  }
}
