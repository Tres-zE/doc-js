let miImage = document.querySelector("img");
miImage.onclick = function () {
  let miSrc = miImage.getAttribute("src");
  if (miSrc === "images/firefox-icon.png") {
    miImage.setAttribute("src", "images/OIG2.jpg");
  } else {
    miImage.setAttribute("src", "images/firefox-icon.png");
  }
};
/*
Ahora cuando hagas clic en la imagen, ¡esta debe cambiar por otra!
*/

/*EXPLICACION DEL CODIGO 
Esto fue lo que sucedió: se almacena una referencia a tu elemento <img> en la variable miImage. Luego, haces que esta propiedad del manejador de evento onclick de la variable sea igual a una función sin nombre (una función «anónima»). Ahora, cada vez que se haga clic en la imagen:

1-El código recupera el valor del atributo src de la imagen.
2-El código usa una condicional para comprobar si el valor src es igual a la ruta de la imagen original:
3-Si es así, el código cambia el valor de src a la ruta de la segunda imagen, forzando a que se cargue la otra imagen en el elemento <img>.
4-Si no es así (significa que ya fue modificada), se cambiará el valor de src nuevamente a la ruta de la imagen original, regresando a como era en un principio.
*/