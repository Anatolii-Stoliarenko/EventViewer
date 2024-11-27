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
  templateUrl: './event-detail-dialog.component.html',
  styleUrls: ['./event-detail-dialog.component.scss'],
  imports: [CommonModule, MatDialogModule],
})
export class EventDetailDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<EventDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  getKeys<T extends object>(obj: T): (keyof T)[] {
    return Object.keys(obj) as (keyof T)[];
  }

  close(): void {
    this.dialogRef.close();
  }
}
