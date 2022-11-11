import github from "../images/github logo.png";
import linkedin from "../images/linkedin logo.png";
import hackerrank from "../images/hackerrank logo.png";
import mail from "../images/mail.png";
import call from "../images/call.png";

const Header = () => {
  return (
    <div id="header">
      <div id="particles"></div>

      <div class="social-media-links">
        <a href="https://github.com/geetesh911">
          <img src={github} class="social-media" alt="github-logo" />
        </a>
        <a href="https://www.linkedin.com/in/geetesh-laddha/">
          <img src={linkedin} class="social-media" alt="linkedin-logo" />
        </a>
        <a href="https://www.hackerrank.com/geetesh911">
          <img src={hackerrank} class="social-media" alt="hackerrank-logo" />
        </a>
      </div>
      <div class="header-content">
        <div class="header-content-box">
          <div class="firstline">
            <span class="color">Geetesh </span>Laddha
          </div>
          <div class="secondline">
            I'm a{" "}
            <span
              class="txt-rotate color"
              data-period="1200"
              data-rotate='[ "Web Developer.", "Full stack JavaScript Developer.", "Freelancer." ]'
            ></span>
            <span class="slash">|</span>
          </div>
          <div class="contact">
            <a href="Mailto:geetesh911@gmail.com">
              <img src={mail} alt="email-pic" class="contactpic" />
            </a>
            <a href="Tel:+919521542026">
              <img src={call} alt="phone-pic" class="contactpic" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
