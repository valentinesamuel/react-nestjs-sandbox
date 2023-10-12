import axios from "axios";
import Scientist from "./Scientist";
import { useEffect, useRef } from "react";
import { Socket, io } from "socket.io-client";

const App: React.FC = () => {
  const socketRef = useRef<Socket | null>(null);
  
  const handleEmit = async () => {
    const response = await axios.post("//localhost:3000/submit", {
      doctor: "Solomon",
      patient: "Makinde",
      scientist: "Asake",
    });
    console.log(response);
  };

  useEffect(() => {
    socketRef.current = io("localhost:3000");
    socketRef.current?.on("connect", () => {
      console.log("Doctor onnected to the Socket.IO server");
    });

    socketRef.current?.on(
      "sci-done-test",
      (testResult: {
        doctor: string;
        patient: string;
        scientist: string;
        result: number[];
      }) => {
        console.log(
          `Scientist ${testResult.scientist} has finished the test`,
          testResult
        );
        return;
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
      <h1>Ready</h1>
      <button onClick={handleEmit}>Request Test</button>
      <br />
      <br />
      <br />
      <Scientist />
    </div>
  );
};

export default App;
