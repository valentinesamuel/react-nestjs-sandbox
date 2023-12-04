import axios from "axios";
import { useEffect } from "react";
import { socket } from "./service/socket";

const ScientistSocket = () => {
  const finishTest = async () => {
    const response = await axios.post("//localhost:3000/scientist/submit", {
      doctor: "Solomon",
      patient: "Makinde",
      scientist: "Asake",
      result: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    });
    console.log(response);
  };

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Scientist connected to the Socket.IO server");
    });
  }, []);

  useEffect(() => {
    socket.on(
      "newTestRequest",
      (testRequest: { doctor: string; patient: string; scientist: string }) => {
        console.log(
          `New test request from Dr. ${testRequest.doctor}`,
          testRequest
        );
      }
    );

    return () => {
      socket.off("newTestRequest");
    };
  }, []);

  return (
    <div>
      <button onClick={finishTest}>Finish Test</button>
    </div>
  );
};

export default ScientistSocket;
