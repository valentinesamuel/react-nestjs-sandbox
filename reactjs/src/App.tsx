import axios from "axios";
import Scientist from "./Scientist";
import { useEffect } from "react";
import { Socket, io } from "socket.io-client";
import { ClientToServerEvents, ServerToClientEvents } from "./types";

const App: React.FC = () => {
  const socket: Socket<ServerToClientEvents, ClientToServerEvents> =
    io("localhost:3000");

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
      console.log("Doctor connected to the Socket.io server");
    });

    socket.on("scidonetest", (testResult) => {
      console.log(testResult);
      return;
    });

    return () => {
      if (socket) {
        console.log("Disconnected");
        socket.disconnect();
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
