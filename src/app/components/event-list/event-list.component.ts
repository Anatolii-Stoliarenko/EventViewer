import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

import { Event } from '../../models/event.model';
import { EventDetailDialogComponent } from './event-detail-dialog/event-detail-dialog.component';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    EventDetailDialogComponent,
    MatTableModule,
    MatPaginatorModule,
  ],
})
export class EventListComponent implements OnInit {
  displayedColumns: string[] = [
    'index',
    'deviceId',
    'eventDate',
    'type',
    'action',
  ];
  events: Event[] = [];
  dataSource = new MatTableDataSource<Event>(this.events);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private eventService: EventService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.initValues();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  initValues(): void {
    this.eventService.fetchEvents().subscribe((data) => {
      this.events = data;
      this.dataSource.data = data;
    });
  }

  openDialogDetails(event: any): void {
    this.dialog.open(EventDetailDialogComponent, {
      data: event,
      maxWidth: '300px',
    });
  }
}
