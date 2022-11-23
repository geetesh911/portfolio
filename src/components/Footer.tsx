import copyright from "../images/copyright.png";

const Footer = () => {
  return (
    <div class="footer">
      <div class="footer-text">
        <img
          src={copyright}
          alt="copyright-img"
          class="images"
          height={14}
          width={14}
        />{" "}
        Geetesh Laddha
      </div>
    </div>
  );
};

export default Footer;
