import { gsap } from "gsap";
import logo from "../images/logo.png";

const NavigationContent = () => {
  const onLinkClick = () => {
    gsap.to("#navigation-content", 0, { display: "none", delay: 0.7 });
    gsap.to("#navigation-content", 0, { y: "-100%", delay: 0.7 });
    gsap.to("#header", 0, { display: "none" });
    gsap.to("#about", 0, { display: "none" });
    gsap.to("#blog", 0, { display: "none" });
    gsap.to("#portfolio", 0, { display: "none" });
    gsap.to("#breaker", 0, { display: "block" });
    gsap.to("#breaker-two", 0, { display: "block", delay: 0.1 });
    gsap.to("#breaker", 0, { display: "none", delay: 2 });
    gsap.to("#breaker-two", 0, { display: "none", delay: 2 });
    gsap.to("#navigation-content", 0, { display: "flex", delay: 2 });
  };

  return (
    <div id="navigation-content">
      <div class="logo">
        <img src={logo} alt="logo" height={50} />
      </div>
      <div
        class="navigation-close"
        onClick={() => gsap.to("#navigation-content", 0.6, { y: "-100%" })}
      >
        <span class="close-first"></span>
        <span class="close-second"></span>
      </div>
      <div class="navigation-links">
        <a href="/" data-text="home" id="home-link" onClick={onLinkClick}>
          HOME
        </a>
        <a
          href="/about"
          data-text="about"
          id="about-link"
          onClick={onLinkClick}
        >
          ABOUT
        </a>
        <a
          href="/projects"
          data-text="projects"
          id="blog-link"
          onClick={onLinkClick}
        >
          PROJECTS
        </a>
        <a
          href="/contact"
          data-text="contact"
          id="contact-link"
          onClick={onLinkClick}
        >
          CONTACT
        </a>
      </div>
    </div>
  );
};

export default NavigationContent;
