import { FC } from "react";
import "./App.css";
import { YouTubeForm } from "./components/YoutubeForm";
import YupYoutubeForm from "./components/YupYoutubeForm";

const App: FC = () => {
  return (
    <div>
      {/* <YouTubeForm /> */}
      <YupYoutubeForm />
    </div>
  );
};

export default App;
