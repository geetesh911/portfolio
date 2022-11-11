import ColorChanger from "./ColorChanger";
import instagram from "../images/instagram.png";
import coding from "../images/coding.png";
import bulb from "../images/bulb.png";

const Services = () => {
  return (
    <div id="services">
      <ColorChanger />
      <div class="services-heading wow">
        <span class="color">My</span> Services
      </div>

      <div class="services-content">
        <div class="service-one service wow">
          <div class="service-img">
            <img src={coding} alt="service-one" />
          </div>
          <div class="service-description">
            <h2>Web Designing</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              quibusdam possimus
            </p>
          </div>
        </div>
        <div class="service-two service wow">
          <div class="service-img">
            <img src={instagram} alt="service-two" />
          </div>
          <div class="service-description">
            <h2>Social Media</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              quibusdam possimus
            </p>
          </div>
        </div>
        <div class="service-three service wow">
          <div class="service-img">
            <img src={bulb} alt="service-three" />
          </div>
          <div class="service-description">
            <h2>Creative Design</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              quibusdam possimus
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
