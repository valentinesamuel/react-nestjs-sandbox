import React, { useEffect } from "react";
import { io } from "socket.io-client";

const App: React.FC = () => {
  const socket = io("http://localhost:3000");

  const handleEmit = () => {
    socket.emit("message", { first: "data" });
  };

  // socket.on("exception", (response) => {
  //   console.log(response);
  // });
  useEffect(() => {
    // Clean up the WebSocket connection when the component unmounts
    // return () => {
    //   socket.disconnect();
    // };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div>
      <h1>WebSocket Example</h1>
      <p>Check the browser console for WebSocket messages.</p>
      <button onClick={handleEmit}>Emmitt</button>
    </div>
  );
};

export default App;
