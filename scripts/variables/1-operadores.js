// let nombreDeLaVariable;
// nombreDeLaVariable = 'Bob';
// //es lo mismo que:
let nombreDeLaVariable = 'Bob';
console.log(nombreDeLaVariable);
//le podemos cambiar el nombre que contiene la variable
nombreDeLaVariable = 'Steve';
console.log(nombreDeLaVariable);


//OPERADORES
/* 
 Un operador es básicamente un símbolo matemático que puede actuar sobre dos valores (o variables) y producir un resultado. En la tabla de abajo aparecen los operadores más simples, con algunos ejemplos para probarlos en la consola del navegador.

Operador	Explicación	Símbolo(s)	Ejemplo
Suma/concatena	Se usa para sumar dos números, o juntar dos cadenas en una.	+	6 + 9;
"Hola " + "mundo!";
Resta, multiplicación, división	Estos hacen lo que esperarías que hicieran en las matemáticas básicas.	-, *, /	9 - 3;
8 * 2; // La multiplicación en JS es un asterisco
9 / 3;
Operador de asignación	Los has visto anteriormente: asigna un valor a una variable.	=	let miVariable = 'Bob';
identidad/igualdad	Comprueba si dos valores son iguales entre sí, y devuelve un valor de true/false (booleano).	===	let miVariable = 3;
miVariable === 4;
Negación, distinto (no igual)	
En ocasiones utilizado con el operador de identidad, la negación es en JS el equivalente al operador lógico NOT — cambia true por false y viceversa.	!, !==	
La expresión básica es true, pero la comparación devuelve false porque lo hemos negado:

let miVariable = 3;
!miVariable === 3;

Aquí estamos comprobando "miVariable NO es igual a 3". Esto devuelve false, porque miVariable ES igual a 3.

let miVariable = 3;
miVariable !== 3;

Nota: mezclar tipos de datos puede dar lugar a resultados extraños cuando se hacen cálculos, así que asegúrate de que relacionas tus variables correctamente y de que recibes los resultados que esperabas. Por ejemplo, teclea: "3" + "25" en tu consola. ¿Por qué no obtienes lo que esperabas? Porque las comillas convierten los números en "strings" (el término inglés para denominar cadenas de caracteres) y de este modo has acabado con los "strings" concatenados entre sí, y no con los números sumados. Si tecleas: 35 + 25, obtendrás el resultado correcto.
*/