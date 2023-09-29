import axios from "axios";
import React, { useState } from "react";

const App: React.FC = () => {
  const [sseData, setSseData] = useState<string>("");

  const handleTestButtonClick = async () => {
    // Send a POST request to trigger the /lab-test endpoint using Axios
    const response = await axios.post("//localhost:3000/lab", {
      name: "Doctor Machisy",
    }); // Adjust the name as needed

    // Successfully triggered the /lab-test endpoint
    // Parse and set the SSE data when the response is received
    const eventData = response;
    console.log(JSON.parse(`${response.data.split("data:")[1].replace(/\s+$/, "")}`));
    console.log("Test request sent successfully.");
    setSseData(eventData.data);
  };
  return (
    <div>
      <h2>Lab Test Component</h2>
      {sseData && <p>{sseData}</p>}
      <button onClick={handleTestButtonClick}>Trigger Test</button>
    </div>
  );
};

export default App;
