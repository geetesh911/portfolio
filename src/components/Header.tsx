import instagram from "../images/instagram logo.png";
import facebook from "../images/facebook logo.png";
import linkedin from "../images/linkedin logo.png";
import twitter from "../images/twitter logo.png";
import mail from "../images/mail.png";
import call from "../images/call.png";

const Header = () => {
  return (
    <div id="header">
      <div id="particles"></div>

      <div class="social-media-links">
        <a href="#">
          <img src={instagram} class="social-media" alt="instagram-logo" />
        </a>
        <a href="#">
          <img src={facebook} class="social-media" alt="facebook-logo" />
        </a>
        <a href="#">
          <img src={linkedin} class="social-media" alt="linkedin-logo" />
        </a>
        <a href="#">
          <img src={twitter} class="social-media" alt="twitter-logo" />
        </a>
      </div>
      <div class="header-content">
        <div class="header-content-box">
          <div class="firstline">
            <span class="color">Geetesh </span>Laddha
          </div>
          <div class="secondline">
            I'm a
            <span
              class="txt-rotate color"
              data-period="1200"
              data-rotate='[ " Designer.", " Blogger.", " Freelancer." ]'
            ></span>
            <span class="slash">|</span>
          </div>
          <div class="contact">
            <a href="Mailto:#">
              <img src={mail} alt="email-pic" class="contactpic" />
            </a>
            <a href="Tel:#">
              <img src={call} alt="phone-pic" class="contactpic" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
