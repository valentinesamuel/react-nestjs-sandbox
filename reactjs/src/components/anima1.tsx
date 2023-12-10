import "../styles/anima1.css";
import '../index.css';
import { gsap } from "gsap";

export const Anima1 = () => {
  const onEnter = ({ currentTarget }: { currentTarget: gsap.TweenTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#e77614", scale: 1.2, x: 200 });
  };

  const onLeave = ({ currentTarget }: { currentTarget: gsap.TweenTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#28a92b", scale: 1, x: 0 });
  };

  return (
    <div className="app flex-row">
      <div className="box" onMouseEnter={onEnter} onMouseLeave={onLeave}>
        Hover Me
      </div>
    </div>
  );
};
