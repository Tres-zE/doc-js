/* 
Eventos
Para crear una interacción real en tu sitio web, debes usar eventos. Estos son unas estructuras de código que captan lo que sucede en el navegador, y permite que en respuesta a las acciones que suceden se ejecute un código. El ejemplo más obvio es un clic (click event), que se activa al hacer clic sobre algo. Para demostrar esto, prueba ingresando lo siguiente en tu consola, luego da clic sobre la página actual:
*/

document.querySelector("html").onclick = function () {
    alert("¡Ouch! ¡Deja de pincharme!");
  };

/*
Hay muchas maneras de enlazar un evento a un elemento; aquí hemos seleccionado el elemento <html> y le asignamos a su propiedad onclick una función anónima (función sin nombre) que contiene el código que se ejecutará cuando el evento suceda.

Nota que
*/  
document.querySelector("html").onclick = function () {};
//es equivalente a
let miHTML = document.querySelector("html");
miHTML.onclick = function () {};
//es solo un modo más corto de escribirlo.