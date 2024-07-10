/* 
Condicionales
Las condicionales son estructuras de código que permiten comprobar si una expresión devuelve true o no, y después ejecuta un código diferente dependiendo del resultado. La forma de condicional más común es la llamada if... else. Entonces, por ejemplo:
*/

let helado = 'chocolate';
if (helado === "chocolate") {
    alert('¡Si, amo el chocolate!');
} else {
    alert('Awwww, pero mi favorito es el de chocolate');
}

/* 
La expresión dentro de if (... ) es el criterio — este usa al operador de identidad (descrito arriba) para comparar la variable helado con la cadena chocolate para ver si las dos son iguales. Si esta comparación devuelve true, el primer bloque de código se ejecuta. Si no, ese código se omite y se ejecuta el segundo bloque de código después de la declaración else.
*/