export function initButton() {
  class Button extends HTMLElement {
    shadow: ShadowRoot;
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
      this.render();
    }
    render() {
      const button = document.createElement("button");
      const style = document.createElement("style");

      button.textContent = this.textContent;
      button.setAttribute("class", "button");

      style.innerHTML = `
      @import url('https://fonts.googleapis.com/css2?family=Mali:wght@700&display=swap');

        .button {
            width: 150px;
            height: 50px;
            font-size: 22px;
            font-weight: bold;
            border: 5px solid black;
            border-radius: 10px;
            background-color: var(--boton);
            color: white;
            font-family: "Moli", cursive;
            box-sizing: border-box;
            cursor: pointer;
        }

        @media (min-width: 769px) {
            .button {
                width: 300px;
                height: 90px;
                font-size: 40px;
            }

            .button:hover {
              transform: scale(1.05); 
            }
        }
            `;
      this.shadow.appendChild(button);
      this.shadow.appendChild(style);
    }
  }
  customElements.define("c-button", Button);
}
