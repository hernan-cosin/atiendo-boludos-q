const bgUrl = require("url:../../media/ins-bg.jpg");
import { state } from "../../src/state";

export function initStep1Inspector(params) {
  const body = document.querySelector("body");
  body.removeAttribute("class");
  const div = document.createElement("div");
  const style = document.createElement("style");
  div.setAttribute("class", "container");

  div.innerHTML = `
  <div class="content">
    <c-box variant="pregunta" class="pregunta">¿Qué tal? Buen día</c-box>
    <ul class="ul">
        <li class="li">
            <c-box variant="respuesta" class="one">A. Buenos días :)</c-box>
        </li>
        <li class="li">
            <c-box variant="respuesta" class="two">B. Tomatela, flaco.</c-box>
        </li>
        <li class="li">
            <c-box variant="respuesta" class="three">C. ¿Y vos quién sos?</c-box>
        </li>
    <ul>
    <c-button class="next-button">Siguiente</c-button>
  </div>
    `;
  style.innerHTML = `
  @import url('https://fonts.googleapis.com/css2?family=Mali:wght@400;700&family=Pacifico&family=Poppins&display=swap');

    body {
      background-image: url(${bgUrl});
    }

    .container {
        max-width: 960px;
        margin: 0 auto;
        height: auto;
        padding: 50px 30px 20px 30px;
    }

    .pregunta {
        display: block;
        margin: 0 0 70px 0;
        text-align: -webkit-center;
    }

    ul {
        margin: 0;
        padding: 0;
        text-align: -webkit-center;
    }

    li {
        display: block;
        margin-bottom: 10px;
        list-style: none;
        cursor: pointer;
        max-width: 310px;
    }

    .next-button {
        display: block;
        margin: 40px auto 0 auto;
        text-align: -webkit-center;
    }

    .blur {
        opacity: .5;
        transform: scale(.95);
    }

    .selected {
        opacity: 1;
    }

    .correct {
        animation: correct 3s;
        animation-fill-mode: both;
    }

    @keyframes correct {
        20% {
          background-blend-mode: darken;
        }
        50% {
            background-color: var(--correct);
        }
        85% {
            background-color: var(--correct2);
        }
    }

    .incorrect {
        animation: incorrect 3s;
        animation-fill-mode: both;
    }

    @keyframes incorrect {
        20% {
          background-blend-mode: darken;
        }
        50% {
            background-color: var(--incorrect);
            
        }
        85% {
            background-color: var(--incorrect2);
        }
    }
    `;

  const lis = div.querySelectorAll(".li") as any;
  const lisArr = Array.from(lis) as any;

  for (const li of lis) {
    li.addEventListener("click", (e: any) => {
      lisArr.forEach((element) => {
        element.classList.remove("selected");
        element.classList.add("blur");
      });

      li.classList.add("selected");
    });
  }

  const nextButton = div.querySelector(".next-button");
  nextButton.addEventListener("click", (e) => {
    e.preventDefault();
    const resultado = winOrLoose();

    if (resultado == 1) {
      state.addScore(resultado);
      document.querySelector("body").classList.add("correct");
      setTimeout(() => {
        params.goTo("/step-2-inspector");
      }, 1500);
    }
    if (resultado == -1) {
      state.addScore(resultado);
      document.querySelector("body").classList.add("incorrect");
      setTimeout(() => {
        params.goTo("/step-2-inspector");
      }, 1500);
    }
    if (resultado == 0) {
      return;
    }
  });

  function winOrLoose() {
    if (
      !lisArr[0].className.includes("selected") &&
      !lisArr[1].className.includes("selected") &&
      !lisArr[2].className.includes("selected")
    ) {
      return 0;
    }
    if (lisArr[1].className.includes("selected")) {
      return 1;
    }

    if (!lisArr[0].className.includes("selected")) {
      return -1;
    }

    if (!lisArr[2].className.includes("selected")) {
      return -1;
    }
  }

  div.appendChild(style);
  return div;
}
