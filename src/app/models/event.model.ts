export interface Event<T extends keyof EventDataMap> {
  deviceId: string;
  eventDate: number;
  type: T;
  evtData: EventDataMap[T];
}

export interface EventDataMap {
  deviceMalfunction: DeviceMalfunctionData;
  temperatureExceeded: TemperatureExceededData;
  doorUnlocked: DoorUnlockedData;
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
