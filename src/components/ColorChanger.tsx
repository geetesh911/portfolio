import { createSignal, For } from "solid-js";
import gear from "../images/gear.png";

const ColorChanger = () => {
  const [colorPanelClass, setColorPanelClass] =
    createSignal<string>("color-changer");

  const changeColor = (color: string) => {
    const stylesheet = document.createElement("link");
    stylesheet.rel = "stylesheet";
    stylesheet.href = `../css/color-${color}.css`;

    document.head.appendChild(stylesheet);
  };

  return (
    <div class={colorPanelClass()}>
      <div
        class="color-panel"
        onClick={() =>
          setColorPanelClass((prevColorPanelClass) =>
            prevColorPanelClass === "color-changer"
              ? "color-changer color-changer-active"
              : "color-changer"
          )
        }
      >
        <img src={gear} alt="" height={40} width={40} />
      </div>
      <div class="color-selector">
        <div class="heading">Custom Colors</div>
        <div class="colors">
          <ul>
            <For each={["red", "purple", "malt", "green", "blue", "orange"]}>
              {(color) => (
                <li>
                  <div
                    class={`color-${color}`}
                    title={`color-${color}`}
                    onClick={() => changeColor(color)}
                  ></div>
                </li>
              )}
            </For>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ColorChanger;
