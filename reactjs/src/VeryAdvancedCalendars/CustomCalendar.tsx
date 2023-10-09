/* eslint-disable @typescript-eslint/no-unused-vars */
import withDragAndDrop, {
  withDragAndDropProps,
} from "react-big-calendar/lib/addons/dragAndDrop";
import Calendar from "../Calendar";
import { CalendarProps } from "react-big-calendar";
import { EVENTS } from "./CustomCalendar.constants";
import AppointmentEvent from "./AppointmentEvent";
import BlockoutEvent from "./BlockoutEvent";
import { EventItem } from "./Types";

const DnDCalendar = withDragAndDrop(Calendar);
type DndType = CalendarProps & withDragAndDropProps;
type CustomCalendarProps = Omit<DndType, "components" | "localizer">;

const CustomCalendar = (props: CustomCalendarProps) => {
  const components = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    event: ({ event }: { event: any }) => {
      const data = event.data;
      if (data.appointment) {
        return <AppointmentEvent appointment={data.appointment} />;
      }
      if (data.blockout) {
        return <BlockoutEvent blockout={data.blockout} />;
      }

      return null;
    },
  };

  const { appointments, blockouts } = EVENTS.reduce(
    (acc, event) => {
      if (event?.data?.appointment) acc.appointments.push(event);
      if (event?.data?.blockout) acc.blockouts.push(event);
      return acc;
    },
    { appointments: [] as EventItem[], blockouts: [] as EventItem[] }
  );

  return <DnDCalendar {...props}  components={components} />;
};

export default CustomCalendar;
