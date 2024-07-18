/*
Primitivo
En JavaScript, un primitive (valor primitivo, tipo de dato primitivo) son datos que no son un objeto y no tienen métodos. Hay 6 tipos de datos primitivos: string, number, bigint, boolean, undefined y symbol. También hay null, que aparentemente es primitivo, pero de hecho es un caso especial para cada Object: y cualquier tipo estructurado se deriva de por la Cadena de prototipos.null

La mayoría de las veces, un valor primitivo se representa directamente en el nivel más bajo de la implementación del lenguaje.

Todos los primitivos son inmutables, es decir, no se pueden modificar. Es importante no confundir un primitivo en sí mismo con un valor primitivo asignado a una variable. Se puede reasignar un nuevo valor a la variable, pero el valor existente no se puede cambiar de la misma forma en que se pueden modificar los objetos, los arreglos y las funciones.

Ejemplo
Este ejemplo te ayudará a comprender que los valores primitivos son inmutables.
*/
// El uso de un método de cadena no modifica la cadena
var bar = "baz";
console.log(bar); // baz
bar.toUpperCase();
console.log(bar); // baz

// El uso de un método de arreglo muta el arreglo
var foo = [];
console.log(foo); // []
foo.push("plugh");
console.log(foo); // ["plugh"]

// La asignación le da al primitivo un nuevo valor (no lo muta)
bar = bar.toUpperCase(); // BAZ
//Un primitivo se puede reemplazar, pero no se puede modificar directamente.

/*
Otro ejemplo [paso a paso]
El siguiente ejemplo te ayudará a analizar cómo se ocupa JavaScript de los primitivos.
*/
// El primitivo
let foo = 5;

// Define una función que debería cambiar el valor primitivo
function addTwo(num) {
  num += 2;
}
// Otra función que intenta hacer lo mismo
function addTwo_v2(foo) {
  foo += 2;
}

// Llama a tu primera función mientras pasas el primitivo como argumento
addTwo(foo);
// Obtiene el valor primitivo actual
console.log(foo); // 5

// Intenta de nuevo con tu segunda función...
addTwo_v2(foo);
console.log(foo); // 5
