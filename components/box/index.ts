export function initBox() {
  class Box extends HTMLElement {
    shadow: ShadowRoot;
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
      this.render();
    }
    render() {
      const box = document.createElement("div");
      const style = document.createElement("style");
      const variant = this.getAttribute("variant");

      box.setAttribute("class", "box-container");
      box.classList.add(variant);
      box.innerHTML = `
        <p class="${variant}">${this.textContent}</p>
      `;

      style.innerHTML = `
      @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

                .box-container {
                    max-width: 310px;
                    width: 100%;
                    height: auto;
                    padding: 4px;
                    border: 3px solid black;
                    border-radius: 8px;
                    font-family: "Poppins", san-serif;
                    font-weight: 400;
                    box-sizing: border-box;
                  }
                  
                  .box-container.respuesta {
                    background-color: var(--respuesta);
                  }
                  
                  .box-container.pregunta {
                    background-color: var(--pregunta);
                    text-align: center;
                }
                  .box-container.resultado {
                    background-color: var(--respuesta);
s                    text-align: center;
                }

                .pregunta, .respuesta {
                  font-family: "Poppins", sans-serif;
                  font-size: 20px;
                  font-weight: 400;
                  padding: 15px 10px;
                  margin: 0;
                }

                .resultado {
                  font-family: "Poppins", sans-serif;
                  font-size: 38px;
                  font-weight: 400;
                  padding: 15px 10px;
                  margin: 0;
                }
                `;

      // .pregunta {
      //     font-family: "Poppins", san-serif;
      // font-size: 20px;
      //     font-weight: 400;
      // }

      // .respuesta {
      //     font-family: "Poppins", san-serif;
      //     font-weight: 400;
      // }
      this.shadow.appendChild(box);
      this.shadow.appendChild(style);
    }
  }
  customElements.define("c-box", Box);
}
