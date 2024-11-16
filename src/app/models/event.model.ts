export interface Event {
  deviceId: string;
  eventDate: number;
  type: 'deviceMalfunction' | 'temperatureExceeded' | 'doorUnlocked';
  evtData: DeviceMalfunctionData | TemperatureExceededData | DoorUnlockedData;
}

export interface DeviceMalfunctionData {
  reasonCode: number;
  reasonText: string;
}

export interface TemperatureExceededData {
  temp: number;
  threshold: number;
}

export interface DoorUnlockedData {
  unlockDate: number;
}
