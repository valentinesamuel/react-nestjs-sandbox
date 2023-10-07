import React from "react";
import { ReactCalendarScheduler } from "react-calendar-scheduler";

const ReactCalendarSchedulerView: React.FC = () => {
  const events = [
    {
      title: "Title",
      sc_app__id: 1,
      description: "TestDecription",
      startDate: "08/10/2023",
      endDate: "08/10/2023",
      startTime: "08:10:48",
      endTime: "17:30:00",
      bg_color: "#216922",
    },
    {
      title: "Shopping",
      sc_app__id: 2,
      description: "Add shopping list",
      startDate: "07/10/2023",
      endDate: "07/10/2023",
      startTime: "08:10:48",
      endTime: "17:30:00",
      bg_color: "#937074",
    },
    {
      title: "Barbing",
      sc_app__id: 3,
      description: "Cut hair",
      startDate: "07/10/2023",
      endDate: "07/10/2023",
      startTime: "08:10:48",
      endTime: "17:30:00",
      bg_color: "#673ab7",
    },
    {
      title: "Coding",
      sc_app__id: 4,
      description: "Write code",
      startDate: "07/10/2023",
      endDate: "08/10/2023",
      startTime: "01:30:48",
      endTime: "14:30:00",
      bg_color: "#03a9f4",
    },
  ];
  return (
    <div>
      <h1>React Calendar Scheduler</h1>
      <ReactCalendarScheduler
        handleEventClick={(event) => {
          console.log(event);
        }}
        // disabaleAddEventPopup={true}
        isShowAddNewEventButton={true}
        events={events}
        minimumEventThickness={70}
        monthCalenderMinCellHeight={200}
        // Other props
        
      />
    </div>
  );
};

export default ReactCalendarSchedulerView;
