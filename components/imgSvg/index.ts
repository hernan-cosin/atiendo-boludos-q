const reportero = require("url:../../media/reportero.svg");
const inspector = require("url:../../media/inspector.svg");

export function initImgSvg() {
  class ImgSvg extends HTMLElement {
    shadow: ShadowRoot;
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
      this.render();
    }
    render() {
      const img = document.createElement("img");
      const style = document.createElement("style");

      const variant = this.getAttribute("variant");

      if (variant == "reportero") {
        img.setAttribute("src", reportero);
        img.setAttribute("class", "img");
      }
      if (variant == "inspector") {
        img.setAttribute("src", inspector);
        img.setAttribute("class", "img");
      }

      style.innerHTML = `
        .img {
            width: 85px;
        }
        @media (min-width: 769px) {
            .img {
                width: 150px;
            }
        }
      `;

      this.shadow.appendChild(img);
      this.shadow.appendChild(style);
    }
  }
  customElements.define("c-img", ImgSvg);
}
