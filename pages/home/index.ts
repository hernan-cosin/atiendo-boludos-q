const bgUrl = require("url:../../media/home-bg.jpg");

export function initHome(params) {
  const div = document.createElement("div");
  const style = document.createElement("style");

  div.innerHTML = `
  <div class="container">
    <c-text variant="title" class="titulo">Atiendo boludos quiz</c-text>
    <c-text variant="subtitle" class="subtitulo">Mide tu habilidad para atender boludos con este clásico de Crónica.</c-text>
    <div class="img-container">
      <c-img variant="reportero" class="img"></c-img>
      <div class="vs-container"><h2 class="vs">VS</h2></div>
      <c-img variant="inspector" class="img img2"></c-img>
    </div>
    <div class="btn-container">
    <!-- <c-button class="boton btn-reportero"><c-text variant="button">Reportero</c-text></c-button> -->
    <c-button class="boton btn-inspector"><c-text variant="button">Comenzar</c-text></c-button>
    </div>
    </div>
    `;
  style.innerHTML = `
  @import url('https://fonts.googleapis.com/css2?family=Mali:wght@400;700&family=Pacifico&family=Poppins&display=swap');

      body {
        background-image: url(${bgUrl});
        background-position: center;
      }

      .container {
        max-width: 960px;
        margin: 0 auto;
        padding-bottom: 30px;
      }

      .titulo {
        display: block;
        max-width: 370px;
        color: var(--titulo);
        text-align: center;
        margin: 30px auto 10px auto;
      }

      .subtitulo {
        display: block;
        max-width: 280px;
        text-align: center;
        margin: 0 auto; 
      }
      @media(min-width: 769px) {
        .subtitulo{
          max-width: 430px;
        }
      }

      .img-container {
        max-width: 960px;
        margin: 0 auto;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin-top: 50px;
      }

      .img { 
        display: inline-block;
      }

      .vs-container {

      }

      .vs {
        font-family: sans-serif;
        font-size: 62px;
      }

      .btn-container {
        display: flex;
        justify-content: space-evenly;
        margin-top: 25px;
      }
      
      .boton {
        display: inline-block;
      }

      .spin {
        animation: spin 2s;
        animation-fill-mode: both;
      }

      .spin2 {
        animation: spin2 2s;
        animation-fill-mode: both;
      }
  
      @keyframes spin {
        50% {
          transform: scale(1.5) rotate(360deg);
        }
      }
      @keyframes spin2 {
        50% {
          transform: scale(1.5) rotate(-360deg);
        }
      }
    `;

  const btnInspector = div.querySelector(".btn-inspector");
  // const btnReportero = div.querySelector(".btn-reportero");

  btnInspector.addEventListener("click", (e) => {
    e.preventDefault();
    params.goTo("/step-1-inspector");
  });

  // btnReportero.addEventListener("click", (e) => {
  //   e.preventDefault();
  // });

  const img = div.querySelector(".img");
  img.addEventListener("click", () => {
    img.classList.add("spin");
    setTimeout(() => {
      img.classList.remove("spin");
    }, 2000);
  });

  const img2 = div.querySelector(".img2");
  img2.addEventListener("click", () => {
    img2.classList.add("spin2");
    setTimeout(() => {
      img2.classList.remove("spin2");
    }, 2000);
  });

  div.appendChild(style);
  return div;
}
