import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class EventListComponent implements OnInit {
  events: any[] = [];

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.eventService.fetchEvents().subscribe((data) => {
      this.events = data;
    });
  }

  onViewDetails(event: any): void {
    alert(`Wyświetlono szczegóły dla zdarzenia: ${JSON.stringify(event)}`);
    // Tu później dodamy logikę do otwierania modala
  }
}
