import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { Event } from '../../models/event.model';
import { EventDetailDialogComponent } from '../../shared/dialogs/event-detail-dialog/event-detail-dialog.component';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  standalone: true,
  imports: [CommonModule, MatDialogModule, EventDetailDialogComponent],
})
export class EventListComponent implements OnInit {
  events: Event[] = [];

  constructor(private eventService: EventService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.eventService.fetchEvents().subscribe((data) => {
      this.events = data;
    });
  }

  onViewDetails(event: any): void {
    this.dialog.open(EventDetailDialogComponent, {
      data: event,
      // width: '400px',
    });
  }
}
