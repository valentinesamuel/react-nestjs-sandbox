import { EventItem } from "./Types";

export enum AppointmentStatusCode {
  Pending = "P",
  CheckedIn = "CI",
}

export const EVENT_STATUS_COLORS = {
  P: "#bee2fa",
  CI: "#c7edca",
};

export const EVENTS: EventItem[] = [
  {
    start: new Date("2023-10-10T10:00:00"),
    end: new Date("2023-10-10T11:00:00"),
    data: {
      appointment: {
        id: 1,
        status: "P",
        location: "New York",
        resource: "Dr Alex",
        address: "Building 5\nStreet 44\nNear Express Highway\nNew York",
      },
    },
    isDraggable: true,
  },
  {
    start: new Date("2023-10-11T12:00:00"),
    end: new Date("2023-10-11T13:00:00"),
    data: {
      appointment: {
        id: 2,
        status: "CI",
        location: "Washington",
        resource: "Dr David",
        address: "Block 1\nSStreet 32\nLong Island\nNew York",
      },
    },
    isDraggable: false,
  },
  {
    start: new Date("2023-10-12T09:00:00"),
    end: new Date("2023-10-19T14:59:59"),
    data: {
      blockout: {
        id: 1,
        name: "Christmas Holidays",
      },
    },
  },
];
