let palabraAleatorio;
let aletorioconguiones;
let cont = 6;

//Abcdario
const abcdario = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Array de palabras
const palabras = ["atlantico", "ordenador", "laurel", "plaza", "rueda", "cereza", "petanca",]

const contentAbc = document.getElementById("content_abcdario")
const palabraDiv = document.getElementById("palabra")
const reset = document.getElementById("reset")
// Botones de letras
var buttons = document.getElementsByClassName('letra');

function generaPalabra() {
  palabraAleatorio = palabras[Math.floor(Math.random() * palabras.length)];
  aletorioconguiones = palabraAleatorio.split('')
  console.log(palabraAleatorio)
}

function pintarGuiones() {
  for (let index = 0; index < aletorioconguiones.length; index++) {
    palabraDiv.innerHTML += aletorioconguiones[index] = " _ ";
  }
}

function inicio() {
  generaPalabra();
  pintarGuiones()
  document.getElementById("reset").disabled = true;
  var letra = ""
  for (let index = 0; index < abcdario.length; index++) {
    letra = abcdario[index];
    contentAbc.innerHTML += "<button value='" + letra + "' onclick='handleClick(\"" + letra + "\")' class='letra' id='" + letra + "'>" + letra + "</button>";
  }

}

function handleClick(element) {
  document.getElementById(element).disabled = true; //desactivando boton  
  document.getElementById(element).style.backgroundColor="#aaa" //cambiando color
  console.log(aletorioconguiones)
  if (palabraAleatorio.indexOf(element) != -1) {
    for (var i = 0; i < palabraAleatorio.length; i++) {
      if (palabraAleatorio[i] == element) aletorioconguiones[i] = element;
    }
    palabraDiv.innerHTML = aletorioconguiones.join("");
  } else {
    cont--;
    document.getElementById("intentos").innerHTML = cont;
    document.getElementById("image" + cont).className += "showImg";
    if (cont == 0) {
      for (let index = 0; index < abcdario.length; index++) {
        document.getElementById(abcdario[index]).disabled = true;
      }
    }
  }
}


inicio();
