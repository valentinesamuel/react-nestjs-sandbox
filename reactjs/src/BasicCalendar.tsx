import { add, addDays, addHours, endOfDay, startOfDay, subHours } from "date-fns";
import Calendar from "./Calendar";
import './Calendar.css'

const events = [
  {
    title: "Natal Registeriation",
    start: add(new Date(), {
      days: 1,
    }),
    end: add(new Date(), {
      days: 2,
      hours: 5,
    }),
  },
  {
    title: "MRI Registeriation",
    start: startOfDay(new Date()),
    end: add(new Date(), {
      hours: 10,
    }),
  },
  {
    title: "ENT Application",
    start: startOfDay(addDays(new Date(), 1)),
    end: addDays(new Date(), 1),
  },
];

const BasicCalendar = () => {
  return (
    <Calendar
      events={events}
      views={["day", "month", "week"]}
      min={addHours(startOfDay(new Date()), 7)}
      max={subHours(endOfDay(new Date()), 3)}
    />
  );
};

export default BasicCalendar;
