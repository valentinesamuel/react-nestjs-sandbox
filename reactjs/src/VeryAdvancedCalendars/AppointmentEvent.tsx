import {
  AppointmentStatusCode,
  EVENT_STATUS_COLORS,
} from "./CustomCalendar.constants";
import { Appointment } from "./Types";

export default function AppointmentEvent({
  appointment,
}: {
  appointment: Appointment;
}) {
  const { location, status, resource, address } = appointment;
  const background = EVENT_STATUS_COLORS[status as AppointmentStatusCode];

  return (
    <div className={`bg-[${background}] p-1 h-full text-black`}>
      <div className="flex justify-between">
        <div>
          <p className="text-sm">{location}</p>
        </div>
        <div>
          <p className="text-sm">{resource}</p>
        </div>
      </div>
      <div className="mt-4">
        {address.split("\n").map((add, index) => (
          <p className="text-sm" key={index}>
            {add}
          </p>
        ))}
      </div>
    </div>
  );
}
