export interface Event<T extends keyof EventDataMap> {
  deviceId: string;
  eventDate: number;
  type: T;
  evtData: EventDataMap[T];
}

export interface DeviceMalfunctionData {
  reasonCode: { label: string; value: number };
  reasonText: { label: string; value: string };
}

export interface TemperatureExceededData {
  temp: { label: string; value: number };
  threshold: { label: string; value: number };
}

export interface DoorUnlockedData {
  unlockDate: { label: string; value: number };
}

export interface EventDataMap {
  deviceMalfunction: DeviceMalfunctionData;
  temperatureExceeded: TemperatureExceededData;
  doorUnlocked: DoorUnlockedData;
}
