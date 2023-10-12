import axios from "axios";
import { useEffect, useRef } from "react";
import { io, Socket } from "socket.io-client";

const Scientist = () => {
  const socketRef = useRef<Socket | null>(null);

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
    socketRef.current = io("localhost:3000");
    socketRef.current?.on("connect", () => {
      console.log("Scientist onnected to the Socket.IO server");
    });

    socketRef.current?.on(
      "newTestRequest",
      (testRequest: { doctor: string; patient: string; scientist: string }) => {
        console.log(
          `New test request from Dr. ${testRequest.doctor}`,
          testRequest
        );
      }
    );

    return () => {
      if (socketRef.current) {
        console.log("Disconnected");
        socketRef.current.disconnect();
      }
    };
  }, []);
  return (
    <div>
      <button onClick={finishTest}>Finish Test</button>
    </div>
  );
};

export default Scientist;
