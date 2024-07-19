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

/*
Tipo de las variables
Hay algunos tipos de datos diferentes que podemos almacenar en variables. En esta sección, los describiremos brevemente, luego, en artículos futuros, aprenderás más detalles.

Hasta ahora hemos analizado los dos primeros, pero hay otros.
*/

/*
Números
Puedes almacenar números en variables, ya sea números enteros como 30 (también llamados enteros — "integer") o números decimales como 2.456 (también llamados números flotantes o de coma flotante — "number"). No es necesario declarar el tipo de las variables en JavaScript, a diferencia de otros lenguajes de programación. Cuando le das a una variable un valor numérico, no incluye comillas:
*/
let myAge = 17;

/*
Booleanos
Los booleanos son valores verdadero/falso — pueden tener dos valores, true o false. Estos, generalmente se utilizan para probar una condición, después de lo cual se ejecuta el código según corresponda. Así, por ejemplo, un caso simple sería:
*/
let iAmAlive = true;
//Mientras que en realidad se usaría más así:
let test = 6 < 3;

/*
Arreglos
Un arreglo es un objeto único que contiene múltiples valores encerrados entre corchetes y separados por comas. Intenta ingresar las siguientes líneas en tu consola:
*/
let myNameArray = ["Chris", "Bob", "Jim"];
let myNumberArray = [10, 15, 40];

//Una vez que se definen estos arreglos, puedes acceder a cada valor por su ubicación dentro del arreglo. Prueba estas líneas:
myNameArray[0]; // debería devolver 'Chris'
myNumberArray[2]; // debe devolver 40

/*
Los corchetes especifican un valor de índice correspondiente a la posición del valor que deseas devolver. Posiblemente hayas notado que los arreglos en JavaScript tienen índice cero: el primer elemento está en el índice 0.
*/

/*
Objetos
En programación, un objeto es una estructura de código que modela un objeto de la vida real. Puedes tener un objeto simple que represente una caja y contenga información sobre su ancho, largo y alto, o podrías tener un objeto que represente a una persona y contenga datos sobre su nombre, estatura, peso, qué idioma habla, cómo saludarlo, y más.

Intenta ingresar la siguiente línea en tu consola:
*/
let dog = { name: "Spot", breed: "Dalmatian" };
//Para recuperar la información almacenada en el objeto, puedes utilizar la siguiente sintaxis:
dog.name;

/*
Tipado dinámico
JavaScript es un "lenguaje tipado dinámicamente", lo cual significa que, a diferencia de otros lenguajes, no es necesario especificar qué tipo de datos contendrá una variable (números, cadenas, arreglos, etc.).

Por ejemplo, si declaras una variable y le das un valor entre comillas, el navegador trata a la variable como una cadena (string):
*/
let myString = "Hello";
//Incluso si el valor contiene números, sigue siendo una cadena, así que ten cuidado:
let myNumber = "500"; // Vaya, esto sigue siendo una cadena
typeof myNumber;
myNumber = 500; // mucho mejor — ahora este es un número
typeof myNumber;
/*
Intenta ingresar las cuatro líneas anteriores en tu consola una por una y ve cuáles son los resultados. Notarás que estamos usando un operador especial llamado typeof — esto devuelve el tipo de datos de la variable que escribes después. La primera vez que se llama, debe devolver string, ya que en ese punto la variable myNumber contiene una cadena, '500'. Échale un vistazo y ve qué devuelve la segunda vez que lo llamas.
*/

/*
Constantes en JavaScript
Muchos lenguajes de programación tienen el concepto de una constante — un valor que, una vez declarado no se puede cambiar. Hay muchas razones por las que querrías hacer esto, desde la seguridad (si un script de un tercero cambia dichos valores, podría causar problemas) hasta la depuración y la comprensión del código (es más difícil cambiar accidentalmente valores que no se deben cambiar y estropear cosas claras).

En los primeros días de JavaScript, las constantes no existían. En JavaScript moderno, tenemos la palabra clave const, que nos permite almacenar valores que nunca se pueden cambiar:
*/
const daysInWeekA = 7;
const hoursInDay = 24;

/*
const funciona exactamente de la misma manera que let, excepto que a const no le puedes dar un nuevo valor. En el siguiente ejemplo, la segunda línea arrojará un error:
*/
const daysInWeek = 7;
daysInWeek = 8;
