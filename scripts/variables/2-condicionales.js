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

/*
 NOTA SUPER IMPORTANTE:
 En JavaScript, el operador de asignación se utiliza para asignar un valor a una variable. La operación de asignación evalúa el valor asignado. El operador de asignación simple es el signo igual (=), que asigna el valor de su operando derecho a su operando izquierdo. Por ejemplo, x = y asigna el valor de y a x. También existen operadores de asignación compuestos que son abreviaturas de operaciones más complejas, como la suma, resta, multiplicación, división y otros. Aquí tienes algunos ejemplos:

Asignación de adición: x += y es equivalente a x = x + y.
Asignación de resta: x -= y es equivalente a x = x - y.
Asignación de multiplicación: x *= y es equivalente a x = x * y.
Asignación de división: x /= y es equivalente a x = x / y.
Asignación de residuo: x %= y es equivalente a x = x % y.
Asignación de exponenciación: x **= y es equivalente a x = x ** y.
Además, JavaScript también tiene un operador ternario especial que se utiliza para expresiones condicionales. Su sintaxis es la siguiente:

JavaScript

conditionalExpression ? truthyValue : falsyValue
Código generado por IA. Revisar y usar cuidadosamente. Más información sobre preguntas frecuentes.
Este operador evalúa la expresión condicional y devuelve un valor verdadero o falso según el resultado. 

El operador ternario en JavaScript es una herramienta poderosa para simplificar lógica condicional en una sola línea. Te mostraré algunos ejemplos:

Verificación de edad para acceso a una plataforma: Supongamos que estamos creando una plataforma de juegos que solo permite usuarios mayores de 18 años. Podemos usar el operador ternario para verificar si un usuario cumple con este requisito:
JavaScript

function canAccessPlatform(age) {
  const shouldAccess = age >= 18 ? true : false;
  return shouldAccess;
}

// Ejemplo de uso:
const userAge = 20;
console.log(`¿Puede acceder a la plataforma? ${canAccessPlatform(userAge)}`);
En este caso, shouldAccess será true si la edad es 18 o más, y false si es menor.
Obtener el mayor de dos números: También podemos usar el operador ternario para determinar el mayor de dos números:
JavaScript

let x = 10;
let y = 8;
const mayor = x > y ? x : y;
console.log(`El mayor de los dos números es ${mayor}`);
Código generado por IA. Revisar y usar cuidadosamente. Más información sobre preguntas frecuentes.Si x es mayor que y, se asigna el valor de x; de lo contrario, se asigna el valor de y.
Recuerda que el operador ternario tiene la siguiente sintaxis:

conditionalExpression ? truthyValue : falsyValue

Donde conditionalExpression es la expresión que se evalúa, y se devuelve truthyValue si es verdadera, o falsyValue si es falsa

En JavaScript, el operador == se utiliza para comparar dos valores y verificar si son iguales. Sin embargo, hay algunas diferencias clave entre == y === (el operador de igualdad estricta). Permíteme explicarte:

Operador == (Igualdad):
El operador == verifica si los valores son iguales, sin considerar los tipos de datos. Esto significa que antes de comparar los valores, JavaScript convierte los tipos de las variables para que coincidan.
Por ejemplo:
JavaScript

5 == "5" // true (se convierte el string a número)
true == 1 // true (se convierte el booleano a número)
Código generado por IA. Revisar y usar cuidadosamente. Más información sobre preguntas frecuentes.
Operador === (Igualdad estricta):
El operador === compara los valores y los tipos de datos. Solo devuelve true si ambos valores son idénticos en valor y tipo.
Por ejemplo:
JavaScript

5 === "5" // false (diferentes tipos: número vs. string)
true === 1 // false (diferentes tipos: booleano vs. número)
Código generado por IA. Revisar y usar cuidadosamente. Más información sobre preguntas frecuentes.
Recomendación:
Siempre que sea posible, utiliza === (igualdad estricta) para evitar sorpresas y errores sutiles.
=== es más seguro porque no realiza conversiones automáticas de tipos y garantiza una comparación precisa.
En resumen, si estás seguro de que los tipos de datos son iguales y solo quieres verificar los valores, puedes usar ==. Sin embargo, para comparaciones más precisas, es preferible utilizar ===.
*/