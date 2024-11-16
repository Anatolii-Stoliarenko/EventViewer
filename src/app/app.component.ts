import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventListComponent } from './event-list/event-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EventListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'nazwa-projektu';
}
