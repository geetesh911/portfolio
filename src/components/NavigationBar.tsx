import { gsap } from "gsap";
import logo from "../images/logo.png";

const NavigationBar = () => {
  return (
    <div id="navigation-bar">
      <img src={logo} alt="logo" />
      <div
        class="menubar"
        onClick={() => gsap.to("#navigation-content", 0.6, { y: 0 })}
      >
        <span class="first-span"></span>
        <span class="second-span"></span>
        <span class="third-span"></span>
      </div>
    </div>
  );
};

export default NavigationBar;
