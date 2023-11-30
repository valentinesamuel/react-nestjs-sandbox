import React from "react";
import BasicsofMotion from "./modules/BasicsofMotion";
import Gestures from "./modules/Gestures";
import AnimationControls from "./modules/AnimationControls";
import ViewBasedAnimations from "./modules/ViewBasedAnimations";
import ScrollBasedAnimations from "./modules/ScrollBasedAnimations";
import TextAnimation from "./modules/TextAnimation";

const App: React.FC = () => {
  return (
    <div>
      {/* <BasicsofMotion /> */}
      {/* <Gestures /> */}
      {/* <AnimationControls /> */}
      {/* <ViewBasedAnimations /> */}
      <ScrollBasedAnimations />
    </div>
  );
};

export default App;
