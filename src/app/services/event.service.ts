import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Event } from '../models/event.model';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private mockData: Event[] = [
    {
      deviceId: 'A23',
      eventDate: 1710355477,
      type: 'deviceMalfunction',
      evtData: {
        reasonCode: 12,
        reasonText: 'temp sensor not responding',
      },
    },
    {
      deviceId: 'A23',
      eventDate: 1710354477,
      type: 'deviceMalfunction',
      evtData: {
        reasonCode: 11,
        reasonText: 'no power',
      },
    },
    {
      deviceId: 'F12HJ',
      eventDate: 1710353477,
      type: 'temperatureExceeded',
      evtData: {
        temp: 10.3,
        threshold: 8.5,
      },
    },
    {
      deviceId: 'D12-1-12',
      eventDate: 1710352477,
      type: 'doorUnlocked',
      evtData: {
        unlockDate: 1710350477,
      },
    },
  ];

  fetchEvents(): Observable<Event[]> {
    return of(this.mockData);
  }
}
