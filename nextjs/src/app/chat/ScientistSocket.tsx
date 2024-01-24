"use client";

import { socket } from "@/lib/sockerserver";
import { useEffect } from "react";

const ScientistSocket = () => {
  const finishTest = async () => {
    const response = await fetch("//localhost:3000/scientist/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        patient: "patient",
        doctor: "doctor",
        scientist: "scientist",
      }),
    });
    console.log(await response.json());
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
    <div className="bg-indigo-700 w-fit rounded-xl p-5">
      <h1>Scientist</h1>
      <br />
      <button onClick={finishTest} className="py-5 px-10 bg-white ">
        Finish Requested Test from Doctor
      </button>
    </div>
  );
};

export default ScientistSocket;
