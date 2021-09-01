export function initText() {
  class Text extends HTMLElement {
    shadow: ShadowRoot;
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
      this.render();
    }
    render() {
      const text = document.createElement("p");
      const style = document.createElement("style");
      let variant = this.getAttribute("variant");

      text.textContent = this.textContent;
      text.className = variant;

      style.innerHTML = `
            @import url('https://fonts.googleapis.com/css2?family=Mali:wght@400;700&family=Pacifico&family=Poppins&display=swap');

            .title {
                font-size: 36px;
                font-family: 'Pacifico', cursive;
                margin: 0;
            }
            @media (min-width: 769px) {
                .title {
                    font-size: 48px;
                }
            }

            .subtitle {
                font-size: 28px;
                font-family: 'Mali', cursive;
                margin: 0;
            }
            @media (min-width: 769px) {
                .subtitle {
                    font-size: 36px;
                }
            }

            .button {
                font-size: 22px;
                font-weight: bold;
                font-family: 'Mali', cursive;
                margin: 0;
                color: white;
            }

            .box {
                font-size: 20px;
                font-weight: 400;
                font-family: 'Poppins', sans-serif;
                margin: 0;
            }
            `;
      this.shadow.appendChild(text);
      this.shadow.appendChild(style);
    }
  }
  customElements.define("c-text", Text);
}
