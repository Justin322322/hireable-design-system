export interface CalendarOption {
  icon: string;
  name: string;
  showConnect: boolean;
}

export interface AvailabilitySlot {
  day: string;
  startTime: string;
  endTime: string;
}

export interface SuggestedAction {
  id: number;
  title: string;
  description: string;
}
