import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { CommonModule } from '@angular/common';
import { Event } from '../../models/event.model';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class EventListComponent implements OnInit {
  events: Event[] = [];
  selectedEvent: any = null;
  showModal: boolean = false;

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.eventService.fetchEvents().subscribe((data) => {
      this.events = data;
    });
  }

  onViewDetails(event: any): void {
    this.selectedEvent = event; // Ustawiamy wybrane zdarzenie
    this.showModal = true; // Pokazujemy modal
  }

  closeModal(): void {
    this.showModal = false; // Ukrywamy modal
    this.selectedEvent = null; // Czyścimy dane wybranego zdarzenia
  }
}
