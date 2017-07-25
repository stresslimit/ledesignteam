import typewriter from './typewriter'

window.onload = () => {
  var element = document.getElementById('js-typewriter')
  if (element)
    typewriter(element)
}
