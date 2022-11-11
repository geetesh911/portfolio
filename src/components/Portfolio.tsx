import ColorChanger from "./ColorChanger";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <ColorChanger />

      <div class="portfolio-header">
        <span class="color"> My</span> Portfolio
        <span class="header-caption">
          Some Of My <span class="color"> Works</span>
        </span>
      </div>
      <div id="portfolio-content">
        <div class="portfolio portfolio-first">
          <div class="portfolio-image">
            <img src="images/portfolio-first.jpg" alt="portfolio-first" />
          </div>
          <div class="portfolio-text">
            <h2>App Idea</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad ut
              optio repellat cupiditate expedita eius dignissimos. Id cumque
              placeat minima ad laudantium suscipit voluptatem ducimus
            </p>
            <div class="button">
              <a href="#">
                <button>
                  <span class="index">
                    View Project<i class="gg-arrow-right"></i>
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div class="portfolio portfolio-second">
          <div class="portfolio-image">
            <img src="images/portfolio-second.jpg" alt="portfolio-second" />
          </div>
          <div class="portfolio-text">
            <h2>Web Designing</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
              cumque placeat minima ad laudantium suscipit voluptatem ducimus.
              Id cumque placeat minima ad laudantium suscipit voluptatem ducimus
            </p>
            <div class="button">
              <a href="#">
                <button>
                  <span class="index">
                    View Project<i class="gg-arrow-right"></i>
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>

        <div class="portfolio portfolio-third">
          <div class="portfolio-image">
            <img src="images/portfolio-third.jpg" alt="portfolio-third" />
          </div>
          <div class="portfolio-text">
            <h2>UI Designing</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad ut
              optio repellat cupiditate expedita eius dignissimos .. Id cumque
              placeat minima ad laudantium suscipit voluptatem ducimus
            </p>
            <div class="button">
              <a href="#">
                <button>
                  <span class="index">
                    View Project<i class="gg-arrow-right"></i>
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div class="portfolio portfolio-fourth">
          <div class="portfolio-image">
            <img src="images/portfolio-fourth.jpg" alt="portfolio-fourth" />
          </div>
          <div class="portfolio-text">
            <h2>Wow Graphics</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad ut
              optio repellat cupiditate expedita eius dignissimos. Id cumque
              placeat minima ad laudantium suscipit voluptatem ducimus
            </p>
            <div class="button">
              <a href="#">
                <button>
                  <span class="index">
                    View Project<i class="gg-arrow-right"></i>
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
