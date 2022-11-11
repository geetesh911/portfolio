import { createSignal } from "solid-js";
import gear from "../images/gear.png";

const ColorChanger = () => {
  const [colorPanelClass, setColorPanelClass] =
    createSignal<string>("color-changer");

  return (
    <div class={colorPanelClass()}>
      <div
        class="color-panel"
        onClick={() => setColorPanelClass("color-changer-active")}
      >
        <img src={gear} alt="" />
      </div>
      <div class="color-selector">
        <div class="heading">Custom Colors</div>
        <div class="colors">
          <ul>
            <li>
              <a href="#0" class="color-red" title="color-red"></a>
            </li>
            <li>
              <a href="#0" class="color-purple" title="color-purple"></a>
            </li>
            <li>
              <a href="#0" class="color-malt" title="color-malt"></a>
            </li>
            <li>
              <a href="#0" class="color-green" title="color-green"></a>
            </li>
            <li>
              <a href="#0" class="color-blue" title="color-blue"></a>
            </li>
            <li>
              <a href="#0" class="color-orange" title="color-orange"></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ColorChanger;
