import { initRouter } from "./router";
import { initText } from "../components/text";
import { initImgSvg } from "../components/imgSvg";
import { initButton } from "../components/button";
import { initBox } from "../components/box";

(function () {
  initText();
  initImgSvg();
  initButton();
  initBox();
  initRouter(document.querySelector(".root"));
})();
