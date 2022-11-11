import ColorChanger from "./ColorChanger";
import name from "../images/icon-name.png";
import location from "../images/icon-location.png";
import phone from "../images/icon-phone.png";
import email from "../images/icon-email.png";
import instagram from "../images/instagram.png";

const Contact = () => {
  return (
    <div id="contact">
      <ColorChanger />
      <div class="contact-header">
        Contact <span class="color"> Me</span>
        <div class="contact-header-caption">
          {" "}
          <span class="color"> Get</span> In Touch.
        </div>
      </div>
      <div class="contact-content">
        <div class="contact-form">
          <div class="form-header">Message Me</div>
          <form name="contact" method="post" data-netlify="true">
            <div class="input-line">
              <input
                id="name"
                type="text"
                placeholder="Name"
                class="input-name"
                name="name"
              />
              <input
                id="email"
                type="email"
                placeholder="Email"
                class="input-name"
                name="email"
              />
            </div>
            <input
              type="text"
              id="subject"
              placeholder="subject"
              class="input-subject"
              name="subject"
            />
            <textarea
              id="body"
              class="input-textarea"
              placeholder="message"
              name="message"
            ></textarea>
            <button type="submit" id="submit" value="send">
              Submit
            </button>
          </form>
        </div>

        <div class="contact-info">
          <div class="contact-info-header">Contact Info</div>
          <div class="contact-info-content">
            <div class="contect-info-content-line">
              <img src={name} class="icon" alt="name-icon" />
              <div class="contact-info-icon-text">
                <h6>Name</h6>
                <p>Geetesh Laddha</p>
              </div>
            </div>
            <div class="contect-info-content-line">
              <img src={location} class="icon" alt="location-icon" />
              <div class="contact-info-icon-text">
                <h6>Address</h6>
                <p>
                  10, Sitaram Vihar, Patrakar Colony, Mansarover, Jaipur -
                  302020
                </p>
              </div>
            </div>
            <div class="contect-info-content-line">
              <img src={phone} class="icon" alt="phone-icon" />
              <div class="contact-info-icon-text">
                <h6>Call</h6>
                <p>+91 9521542026</p>
              </div>
            </div>

            <div class="contect-info-content-line">
              <img src={email} class="icon" alt="email-icon" />
              <div class="contact-info-icon-text">
                <h6>Email</h6>
                <p>geetesh911@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
