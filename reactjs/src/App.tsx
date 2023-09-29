import React, { ChangeEvent, useEffect, useState } from "react";
import { io } from "socket.io-client";

interface Message {
  name: string;
  text: string;
}

const App: React.FC = () => {
  const socket = io("localhost:3000");
  const [newMessage, setNewMessage] = useState({
    name: "someone",
    text: "Hello There",
  });
  const [messages, setMessages] = useState<Message[]>([]);

  const createMessage = () => {
    socket.emit("createMessage", newMessage);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewMessage({ ...newMessage, [name]: value });
  };

  useEffect(() => {
    // Create a socket connection to the server

    // Event listener for when the socket connects
    socket.on("connect", () => {
      console.log("Connected to the Socket.IO server");
    });

    // Event listener for custom events from the server
    socket.emit("findAllMessages", {}, (data: Message[]) => {
      console.log(data);
      return setMessages(data);
    });

    // Clean up the socket connection when the component unmounts
    // return () => {
    //   socket.disconnect();
    // };
  }, []);
  return (
    <div>
      <div className="chat">
        <div className="messages">
          {messages.map((message) => {
            return (
              <p>
                [{message.name}] : {message.text}
              </p>
            );
          })}
        </div>
        <div className="mt-6">
          <input
            type="text"
            onChange={handleChange}
            value={newMessage.text}
            name="text"
          />
          <button onClick={createMessage}>Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default App;
