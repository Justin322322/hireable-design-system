/**
 * Constants for TalentScheduleCard
 */

// Available dates (light blue with inset shadow)
export const AVAILABLE_DATES = [23, 24, 25, 26, 29, 30];

// Selected date (filled blue)
export const SELECTED_DATE = 23;

// Calendar columns (each column is a day of week with its dates)
export const CALENDAR_COLUMNS = [
  { day: "SUN", dates: [null, 7, 14, 21, 28] },
  { day: "MON", dates: [1, 8, 15, 22, 29] },
  { day: "TUE", dates: [2, 9, 16, 23, 30] },
  { day: "WED", dates: [3, 10, 17, 24, null] },
  { day: "THU", dates: [4, 11, 18, 25, null] },
  { day: "FRI", dates: [5, 12, 19, 26, null] },
  { day: "SAT", dates: [6, 13, 20, 27, null] },
];

// Mobile calendar - show all 7 days in compact format
export const MOBILE_CALENDAR_COLUMNS = [
  { day: "S", dates: [null, 7, 14, 21, 28] },
  { day: "M", dates: [1, 8, 15, 22, 29] },
  { day: "T", dates: [2, 9, 16, 23, 30] },
  { day: "W", dates: [3, 10, 17, 24, null] },
  { day: "T", dates: [4, 11, 18, 25, null] },
  { day: "F", dates: [5, 12, 19, 26, null] },
  { day: "S", dates: [6, 13, 20, 27, null] },
];

// Time slots
export const TIME_SLOTS = [
  "12:00pm",
  "12:30pm",
  "1:00pm",
  "1:30pm",
  "2:00pm",
  "2:30pm",
  "3:00pm",
  "3:30pm",
  "4:00pm",
];

// Mobile time slots - show fewer
export const MOBILE_TIME_SLOTS = ["12:00pm", "12:30pm", "1:00pm", "1:30pm"];
