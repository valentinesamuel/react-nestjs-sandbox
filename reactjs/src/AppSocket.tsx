import axios from "axios";
import Scientist from "./Scientist";
import { useEffect } from "react";
import { socket } from "./service/socket";
import ScientistSocket from "./ScientistSocket";

const AppSocket: React.FC = () => {
  const handleEmit = async () => {
    const response = await axios.post("//localhost:3000/submit", {
      doctor: "Solomon",
      patient: "Makinde",
      scientist: "Asake",
    });
    console.log(response);
  };

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Doctor connected to the Socket.IO server");
    });
  }, []);

  useEffect(() => {
    socket.on(
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
      socket.off("sci-done-test");
    };
  }, []);

  return (
    <div>
      <h1>Ready</h1>
      <button onClick={handleEmit}>Request Test</button>
      <br />
      <br />
      <br />
      <ScientistSocket />
    </div>
  );
};

export default AppSocket;
