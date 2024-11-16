import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { EventListComponent } from './components/event-list/event-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [RouterOutlet, EventListComponent],
})
export class AppComponent {}
