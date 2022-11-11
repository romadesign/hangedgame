let palabraAleatorio
let aletorioconguiones
let cont = 6

//Abcdario
const abcdario = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'ñ',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
]
// Array de palabras
const palabras = [
  'atlantico',
  'ordenador',
  'laurel',
  'plaza',
  'rueda',
  'cereza',
  'petanca'
]

let contentAbc = document.getElementById('content_abcdario')
let palabraDiv = document.getElementById('palabra')
let reset = document.getElementById('reset')
let content_gif_happy = document.getElementById('content_gif_happy')
let content_gif_perdedor = document.getElementById('content_gif_perdedor')
let buttons = document.getElementsByClassName('letra')
let content = document.getElementById('content')
let aleatorioShow = document.getElementById('aleatorioShow')

function generaPalabra () {
  palabraAleatorio = palabras[Math.floor(Math.random() * palabras.length)]
  aletorioconguiones = palabraAleatorio.split('')
  console.log(palabraAleatorio)
}

function pintarGuiones () {
  for (let index = 0; index < aletorioconguiones.length; index++) {
    palabraDiv.innerHTML += aletorioconguiones[index] = '_'
  }
}

function inicio () {
  generaPalabra()
  pintarGuiones()
  palabraAleatorioRamdon()
  // document.getElementById('reset').disabled = true
  var letra = ''
  for (let index = 0; index < abcdario.length; index++) {
    letra = abcdario[index]
    contentAbc.innerHTML +=
      "<button value='" +
      letra +
      "' onclick='handleClick(\"" +
      letra +
      "\")' class='letra' id='" +
      letra +
      "'>" +
      letra +
      '</button>'
  }
}

function handleClick (element) {
  document.getElementById(element).disabled = true //desactivando boton cuando ya esta seleccionado
  document.getElementById(element).style.backgroundColor = '#aaa' //cambiando color del boton cuando ya esta seleccionado

  if (palabraAleatorio.indexOf(element) != -1) {
    for (var i = 0; i < palabraAleatorio.length; i++) {
      if (palabraAleatorio[i] == element) aletorioconguiones[i] = element
    }
    palabraDiv.innerHTML = aletorioconguiones.join('') //Quitando comas
    validacionGanador()
  } else {
    cont--
    document.getElementById('intentos').innerHTML = cont
    document.getElementById('image' + cont).className += 'showImg'
    validacionPerdedor()
  }
}

function validacionPerdedor () {
  if (cont == 0) {
    content_gif_perdedor.style.display = 'block'
    content.style.display = 'none'
  }
}

function validacionGanador () {
  if (aletorioconguiones.join('') == palabraAleatorio) {
    content_gif_happy.style.display = 'block'
    content.style.display = 'none'
  }
}

function palabraAleatorioRamdon(){
  const random = palabraAleatorio.split('')
  aleatorioShow.innerHTML = `" ${random.sort().join(' ')} "` //muestra las letras aleatoriamente Con Join se quitan las comas
  console.log(random)


}

inicio()
