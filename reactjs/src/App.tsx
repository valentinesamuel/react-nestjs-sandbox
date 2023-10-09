import { FC } from "react";

import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

import DraggableCalendar from "./VeryAdvancedCalendars/DragnDropCalendar";
import CustomCalendar from "./VeryAdvancedCalendars/CustomCalendar";
import CalendarSteps from "./VeryAdvancedCalendars/CaledarSteps";

const App: FC = () => {
  return (
    <div style={{ height: "95vh" }}>
      {/* <BasicCalendar /> */}
      {/* <AdvancedCalendar /> */}
      <DraggableCalendar />
      {/* <CalendarSteps /> */}
    </div>
  );
};

export default App;
