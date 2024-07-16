/* 
Las funciones son una manera de encapsular una funcionalidad que quieres reutilizar, de manera que puedes llamar esa función con un solo nombre, y no tendrás que escribir el código entero cada vez que la utilices. Ya has visto algunas funciones más arriba, por ejemplo:*/

let nombreDeLaVariable = document.querySelector("h1");

alert("¡Hola!");
/*Estas funciones document.querySelector y alert están integradas en el navegador para poder utilizarlas en cualquier momento.

Si ves algo que parece un nombre de variable, pero tiene paréntesis —()— al final, probablemente es una función. Las funciones con frecuencia toman argumentos —pedazos de datos que necesitan para hacer su trabajo—. Estos se colocan dentro de los paréntesis, y se separan con comas si hay más de uno.

Por ejemplo, la función alert() hace aparecer una ventana emergente dentro de la ventana del navegador, pero necesitas asignarle una cadena como argumento para decirle qué mensaje se debe escribir en la ventana emergente.

Las buenas noticias son que podemos definir nuestras propias funciones —en el siguiente ejemplo escribimos una función simple que toma dos números como argumentos y los multiplica entre sí—:
*/

function multiplica(num1, num2) {
    let resultado = num1 * num2;
    return resultado;
}
//NOTA: RETURN: le dice al navegador que devuelva la variable resultado fuera de la función, para que esté disponible para su uso. Esto es necesario porque las variables definidas dentro de funciones, solo están disponibles dentro de esas funciones. Esto se conoce como «ámbito (scope en inglés) de la variable».

console.log(multiplica(4,7));

/* 
Nota: la sentencia return le dice al navegador que devuelva la variable resultado fuera de la función, para que esté disponible para su uso. Esto es necesario porque las variables definidas dentro de funciones, solo están disponibles dentro de esas funciones. Esto se conoce como «ámbito (scope en inglés) de la variable». Lee más sobre ámbito o alcance de la variable.
*/