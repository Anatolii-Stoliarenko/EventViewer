import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { EventListComponent } from './components/event-list/event-list.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterOutlet, EventListComponent, HeaderComponent, FooterComponent],
})
export class AppComponent {}
