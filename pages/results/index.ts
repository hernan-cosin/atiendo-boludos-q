const bgUrl = require("url:../../media/results-bg.jpg");
import { state } from "../../src/state";

export function initResults(params) {
  const div = document.createElement("div");
  const style = document.createElement("style");
  div.setAttribute("class", "container");
  const data = state.getState();

  const wins = data.wins.length;
  const looses = data.looses.length;

  div.innerHTML = `
        <div class="content">
            <c-text variant="title" class="titulo">Puntuación</c-text>
            <c-box variant="resultado" class="resultado">${wins} / ${
    wins + looses
  }</c-box>
  
            <div class="text-container">

            </div>
            <c-button class="back-button">Volver</c-button>
            <c-img variant="inspector" class="img"></c-img>
        </div>
    `;
  style.innerHTML = `
  @import url('https://fonts.googleapis.com/css2?family=Mali:wght@400;700&family=Pacifico&family=Poppins&display=swap');

    body {
     background-image: url(${bgUrl}); 
    }
    .container {
        max-width: 960px;
        height: auto;
        margin: 0 auto;
        padding: 50px 30px 20px 30px;
    }

    .titulo {
        display: block;
        max-width: 370px;
        color: var(--titulo);
        text-align: center;
        margin: 30px auto 80px auto;
    }

    .resultado {
        text-align: -webkit-center;
        display: block;
        margin: 0 0 80px 0;
        font-weight: bold;
    }

    .back-button {
        display: block;
        text-align: -webkit-center;
        margin: 0 0 60px 0;
    } 

    .img {
        display: block;
        text-align: -webkit-center;
    }

    .text-container {
      display: block;
      min-height: auto;
      background-color: #2196f38c;
      border-radius: 15px;
      border: 3px solid black;
      margin: 0 0 20px 0;
    }

    .results-text {
      font-size: 36px;
      font-family: 'Poppins', sans-serif;
      text-align: center;
    }

    .link {
      color: white;
    }

    .spin {
      animation: spin 2s;
      animation-fill-mode: both;
    }

    @keyframes spin {
      50% {
        transform: scale(1.5) rotate(360deg);
      }
    }
    `;

  const textContainer = div.querySelector(".text-container");
  generateText(textContainer);

  const backButton = div.querySelector(".back-button");
  backButton.addEventListener("click", (e) => {
    e.preventDefault();
    state.reset();
    params.goTo("/home");
  });

  const img = div.querySelector(".img");
  img.addEventListener("click", () => {
    img.classList.add("spin");
    setTimeout(() => {
      img.classList.remove("spin");
    }, 2000);
  });

  function generateText(container: Element) {
    const text = document.createElement("p");
    text.setAttribute("class", "results-text");

    if (wins <= 3) {
      text.innerHTML = `
      Uy, con tus respuestas el empresariado ha logrado aumentar a 75 centavos el boleto mínimo.
      <a href="https://youtu.be/i5Vdl_unhHQ" target="_blank" class="link">Mira el video y vuelve a probar</a>
      `;
    }
    if (wins >= 4 && wins <= 5) {
      text.textContent = "No está mal";
    }
    if (wins >= 6 && wins <= 8) {
      text.textContent =
        "¡En hora buena! Has atendido a un boludo satisfactoriamente.";
    }
    if (wins >= 9) {
      text.textContent =
        "¡FELICITACIONES! Eres un atendedor de boludos profesional.";
    }
    return container.appendChild(text);
  }
  div.appendChild(style);
  return div;
}
