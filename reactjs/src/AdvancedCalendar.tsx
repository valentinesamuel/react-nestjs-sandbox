import {
  add,
  addDays,
  startOfDay,
} from "date-fns";
import Calendar from "./Calendar";
import "./Calendar.css";

const events = [
  {
    title: "Natal Registration",
    start: add(new Date(), {
      days: 1,
    }),
    end: add(new Date(), {
      days: 2,
      hours: 5,
    }),
    data: {
      type: "Reg",
    },
  },
  {
    title: "MRI Registeriation",
    start: startOfDay(new Date()),
    end: add(new Date(), {
      hours: 10,
    }),
    data: {
      type: "Reg",
    },
  },
  {
    title: "ENT Appointment",
    start: startOfDay(addDays(new Date(), 1)),
    end: addDays(new Date(), 1),
    data: {
      type: "App",
    },
  },
];

const components = {
  event: (prop) => {
    const eventType = prop.event.data.type;
    switch (eventType) {
      case "Reg":
        return (
          <div
            style={{
              backgroundColor: "yellow",
              color: "black",
              height: "100%",
            }}
          >
            {prop.title}
          </div>
        );
      case "App":
        return (
          <div style={{ backgroundColor: "pink", color: "black" }}>
            {prop.title}
          </div>
        );

      default:
        break;
    }
  },
};

const AdvancedCalendar = () => {
  return <Calendar events={events} components={components} />;
};

export default AdvancedCalendar;
