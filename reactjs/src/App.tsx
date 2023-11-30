import React from "react";
import BasicsofMotion from "./modules/BasicsofMotion";
import Gestures from "./modules/Gestures";
import AnimationControls from "./modules/AnimationControls";
import ViewBasedAnimations from "./modules/ViewBasedAnimations";

const App: React.FC = () => {
  return (
    <div>
      {/* <BasicsofMotion /> */}
      {/* <Gestures /> */}
      {/* <AnimationControls /> */}
      <ViewBasedAnimations />
    </div>
  );
};

export default App;
