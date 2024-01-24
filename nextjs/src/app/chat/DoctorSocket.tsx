"use client";

import { useEffect } from "react";
import ScientistSocket from "./ScientistSocket";
import { socket } from "@/lib/sockerserver";

const Doctor: React.FC = () => {
  const handleEmit = async () => {
    const response = await fetch("//localhost:3000/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        doctor: "Solomon",
        patient: "Makinde",
        scientist: "Asake",
      }),
    });
    console.log(await response.json());
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
    <div className="bg-green-700 w-fit rounded-xl p-5">
      <h1>Doctor</h1>
      <br />
      <button onClick={handleEmit} className="py-5 px-10 bg-white ">
        Request Test From Scientist
      </button>
      <br />
      <br />
    </div>
  );
};

export default Doctor;
