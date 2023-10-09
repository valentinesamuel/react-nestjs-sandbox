import "@mormat/react-ui-scheduler/public/scheduler.css";
import Scheduler from "@mormat/react-ui-scheduler";

const ReactScheduler: React.FC = () => {
  const schedulerEvents = [
    {
      label: "meeting",
      date: "2023-04-18",
      startTime: "09:00",
      endTime: "12:00",
      color: "white",
      backgroundColor: "rgb(2, 136, 209)",
    },
    {
      label: "conference",
      date: "2023-04-20",
      startTime: "10:00",
      endTime: "18:00",
      color: "white",
      backgroundColor: "#9575cd",
    },
    {
      label: "conference",
      date: "2023-04-20",
      startTime: "10:00",
      endTime: "18:00",
      color: "white",
      backgroundColor: "#54784c",
    },
  ];

  const onEventChange = (schedulerEvent: unknown) => {
    console.log("the following event has been changed", schedulerEvent);
  };
  return (
    <Scheduler
      events={schedulerEvents}
      onEventChange={onEventChange}
      currentDate="2023-04-17"
      // minHour="07:00"
      // maxHour="21:00"
    />
  );
};

export default ReactScheduler;
