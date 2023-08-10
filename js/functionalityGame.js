	// Obtener STR
function id(str) {
  return document.getElementById(str);
}

// Get : work + number length
function obtener_random(num_min, num_max) {
  const amplitud_valores = num_max - num_min;
  const valor_al_azar = Math.floor(Math.random() * amplitud_valores) + num_min;
  return valor_al_azar;
}

let palabrita;
let cant_errores = 0; //cuantas veces me equivoqué
let cant_aciertos = 0; //cuantas letras acerté

const palabras = [
  "ARDILLA",
  "CEBRA",
  "CIERVO",
  "ELEFANTE",
  "GORILA",
  "HIPOPOTAMO",
  "LEON",
  "LOBO",
  "MONO",
  "OSO",
  "RENO",
  "RINOCERONTE",
  "TIGRE",
  "ZORRO",
  "JIRAFA",
];

const btn = id("jugar");
const imagen = id("imagen");
const btn_letras = document.querySelectorAll("#letras button");

/* click en iniciar juego */
btn.addEventListener("click", iniciar);

function iniciar(event) {
  imagen.src = "img/animations/layer_00.jpg";
  btn.disabled = true;
  cant_errores = 0;
  cant_aciertos = 0;

  const parrafo = id("palabra_a_adivinar");
  parrafo.innerHTML = "";

  const cant_palabras = palabras.length;
  const valor_al_azar = obtener_random(0, cant_palabras);

  palabrita = palabras[valor_al_azar];
  alert(`La palabra a adivinar es: \n "${palabrita}"`);
  const cant_letras = palabrita.length;

  for (let i = 0; i < btn_letras.length; i++) {
    btn_letras[i].disabled = false;
  }

  for (let i = 0; i < cant_letras; i++) {
    const span = document.createElement("span");
    parrafo.appendChild(span);
  }
}

/* click de adivinar letra */
for (let i = 0; i < btn_letras.length; i++) {
  btn_letras[i].addEventListener("click", click_letras);
}

function click_letras(event) {
  const spans = document.querySelectorAll("#palabra_a_adivinar span");
  const button = event.target; //cuál de todas las letras, llamó a la función.
  button.disabled = true;

  const letra = button.innerHTML.toLowerCase();
  const palabra = palabrita.toLowerCase(); // .toUpperCase( )

  let acerto = false;
  for (let i = 0; i < palabra.length; i++) {
    if (letra == palabra[i]) {
      //la variable i es la posición de la letra en la palabra.
      //que coincide con el span al que tenemos que mostarle esta letra...
      spans[i].innerHTML = letra;
      cant_aciertos++;
      acerto = true;
    }
  }

  if (acerto == false) {
    cant_errores++;
    const source = `img/animations/layer_0${cant_errores}.jpg`;
    imagen.src = source;
  }

  if (cant_errores == 7) {
    alert(`:( Game Over \n La palabra era: "${palabrita}" suerte la proxima`);
    location = "index.html";
    game_over();
  } else if (cant_aciertos == palabrita.length) {
    alert(`:) Ganaste la Partida!!! \n Felicitaciones`);
    location = "index.html";
    game_over();
  }
}

/* fin del juego */
function game_over() {
  for (let i = 0; i < btn_letras.length; i++) {
    btn_letras[i].disabled = true;
  }

  btn.disabled = false;
}

game_over();
