import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private mockData = [
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

  fetchEvents(): Observable<any[]> {
    return of(this.mockData); // Symulacja asynchronicznego pobierania danych
  }
}
