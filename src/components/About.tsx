import ColorChanger from "./ColorChanger";
import about from "../images/about.jpg";

const About = () => {
  return (
    <div id="about">
      <ColorChanger />

      <div id="about-content">
        <div class="about-header">
          About <span class="color">Me</span>
          <span class="header-caption">
            Get to Know <span class="color"> me.</span>
          </span>
        </div>
        <div class="about-main">
          <div class="about-first-paragraph wow">
            <span class="about-first-line">
              I'm full stack <span class="color">web developer</span> based in
              Jaipur
            </span>
            <br />
            <span class="about-second-line">
              {" "}
              I am a tech enthusiast who who enjoys building great products
              using JavaScript. I have 2.5 years of experience as a full stack
              JavaScript developer in a product based company PillarPlus.
              Earlier, I have also worked as a freelancer in the JavaScript
              related projects.
            </span>
            <div class="cv">
              <a href="https://drive.google.com/uc?export=download&id=1EoLWMKIfVlCZXNv2cnhS3XpYLxmXfHlM">
                <button>
                  Download <span class="colors">CV</span>
                </button>
              </a>
            </div>
          </div>

          <div class="about-img">
            <img src={about} alt="Your Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
