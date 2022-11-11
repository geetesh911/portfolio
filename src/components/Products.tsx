import ColorChanger from "./ColorChanger";
import { For, Component, createSignal } from "solid-js";
import { Swiper, Pagination, Navigation, Lazy } from "swiper";
import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { parseDriveUrl } from "../utils/general.util";

export interface IProduct {
  name: string;
  description: string;
  price: string;
  images: string[];
}

const Products: Component<{ products: IProduct[] }> = (props) => {
  const [products] = createSignal<IProduct[]>(props.products);

  const _swiper = new Swiper(".swiper-container", {
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      renderBullet: function (_, className) {
        return '<span class="' + className + '">' + "</span>";
      },
    },
    slidesPerView: "auto",
    spaceBetween: 0,
    lazy: true,
    modules: [Pagination, Navigation, Lazy],
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  return (
    <div id="blog">
      <ColorChanger />

      <div class="blog-header">
        Products
        <span class="header-caption">
          My Latest <span class="color"> products.</span>
        </span>
      </div>

      <div class="blog-content">
        <For each={products()}>
          {(product) => (
            <div class="blogs">
              <a href="#">
                <div
                  style="--swiper-navigation-color: #fff;"
                  class="img swiper swiper-container"
                >
                  <div class="swiper-wrapper">
                    <For each={product.images}>
                      {(image) => (
                        <div class="swiper-slide slide">
                          <img
                            data-src={parseDriveUrl(image)}
                            class="swiper-lazy"
                          />
                          <div class="img-loader swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                        </div>
                      )}
                    </For>
                  </div>
                  <div class="swiper-button-next"></div>
                  <div class="swiper-button-prev"></div>
                  <div class="swiper-pagination"></div>

                  <div class="blog-date">₹{product.price}</div>
                </div>
                <div class="blog-text">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                </div>
              </a>
            </div>
          )}
        </For>
      </div>
    </div>
  );
};

export default Products;
