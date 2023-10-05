import { useEffect, useRef } from "react";
import { io, Socket } from "socket.io-client";

const Scientist = () => {
  const socketRef = useRef<Socket | null>(null);

  const finishTest = () => {
    socketRef.current?.emit("test-done", {
      doctor: "Solomon",
      patient: "Makinde",
      scientist: "Asake",
      result: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    });
  };

  useEffect(() => {
    // Initialize the socket connection when the component mounts
    socketRef.current = io("localhost:3000");

    // Connect to the WebSocket server
    socketRef.current.on("connect", () => {
      console.log("Scientist onnected to the Socket.IO server");
    });
    // Listen for incoming messages
    socketRef.current.on("newTestRequest", (testRequest) => {
      // Display the test request notification to the lab scientist
      console.log(testRequest);
    });

    socketRef.current.on("scidonetest", (testResult) => {
      console.log(testResult);
    });

    // Clean up the socket connection when the component unmounts
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
