import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppSocket from "./AppSocket.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppSocket />
  </React.StrictMode>
);
