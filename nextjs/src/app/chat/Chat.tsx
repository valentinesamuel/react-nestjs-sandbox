import Doctor from "./DoctorSocket";
import Scientist from "./ScientistSocket";

const Chat = () => {
  return (
    <div className="h-screen flex w-full items-center justify-between px-[20%]">
      <Doctor />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Scientist />
    </div>
  );
};

export default Chat;
