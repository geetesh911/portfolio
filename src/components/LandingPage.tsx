import { onMount } from "solid-js";
import { gsap } from "gsap";
import Header from "./Header";

const LandingPage = () => {
  onMount(() => {
    gsap.to("#loader", 1, { y: "-100%" });
    gsap.to("#loader", 1, { opacity: 0 });
    gsap.to("#loader", 0, { display: "none", delay: 1 });
    gsap.to("#header", 0, { display: "block", delay: 1 });
    gsap.to("#navigation-content", 0, { display: "none" });
    gsap.to("#navigation-content", 0, { display: "flex", delay: 1 });
  });

  return (
    <div id="all">
      <div class="cursor"></div>

      <div id="loader">
        <span class="color">Geetesh</span>Laddha
      </div>

      <div id="breaker"></div>
      <div id="breaker-two"></div>

      <Header />
    </div>
  );
};

export default LandingPage;
