import CustomCalendar from "./CustomCalendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/en-US";
import { dateFnsLocalizer } from "react-big-calendar";
import { useCallback, useState } from "react";
import { EVENTS } from "./CustomCalendar.constants";
import { EventItem } from "./Types";

const locales = {
  "en-US": enUS,
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const DragnDropCalendar = () => {
  const [events, setEvents] = useState(EVENTS);

  const onChangeEventTime = useCallback(
    (start: Date, end: Date, appointmentId: number | undefined) => {
      setEvents((previousEvents) => {
        return previousEvents.map((events) =>
          events.data?.appointment?.id === appointmentId
            ? { ...events, start, end }
            : events
        );
      });
    },
    []
  );

  return (
    <CustomCalendar
      resizable
      onEventDrop={({ start, end, event }) => {
        onChangeEventTime(
          start as Date,
          end as Date,
          (event as EventItem)?.data?.appointment?.id
        );
      }}
      onEventResize={({ start, end, event }) => {
        onChangeEventTime(
          start as Date,
          end as Date,
          (event as EventItem)?.data?.appointment?.id
        );
      }}
      events={events}
    />
  );
};

export default DragnDropCalendar;
