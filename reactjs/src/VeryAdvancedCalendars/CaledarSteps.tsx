import CustomCalendar from "./CustomCalendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/en-US";
import { dateFnsLocalizer } from "react-big-calendar";

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
export default function CalendarSteps() {
  return (
    <div>
      <CustomCalendar timeslots={3} localizer={localizer} />
    </div>
  );
}
