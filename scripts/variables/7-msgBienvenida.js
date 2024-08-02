/* 
En main.js, agrega el siguiente código al final del archivo, exactamente como está escrito. Esto toma referencia al nuevo botón que se agregó y al título y los almacena en variables:
*/

let miBoton = document.querySelector("button");
let miTitulo = document.querySelector("h1");

/* 
Ahora agrega la siguiente función para poner el saludo personalizado, lo que no causará nada aún, pero arreglarás esto en un momento:
el antes y despues para que deje de ser null

function estableceNombreUsuario() {
    let miNombre = prompt("Por favor, ingresa tu nombre.");
    localStorage.setItem("nombre", miNombre);
    miTitulo.textContent = "Mozilla es genial," + miNombre;
  }*/
    function estableceNombreUsuario() {
        let miNombre = prompt("Introduzca su nombre.");
        if (!miNombre) {
          estableceNombreUsuario();
        } else {
          localStorage.setItem("nombre", miNombre);
          miTitulo.innerHTML = "Mozilla is genial, " + miNombre;
        }
      }
/*
En el lenguaje humano, esto significa que si miNombre no tiene ningún valor, ejecute estableceNombreUsuario() de nuevo desde el principio. Si tiene un valor (si la afirmación anterior no es verdadera), entonces almacene el valor en localStorage y establézcalo como el texto del título.
*/      

/* 
La función estableceNombreUsuario() contiene una función prompt(), que crea un cuadro de diálogo como lo hace alert(); la diferencia es que prompt() pide al usuario un dato, y almacena este dato en una variable cuando el botón Aceptar del cuadro de diálogo es presionado. En este caso, pedirás al usuario que ingrese su nombre. Luego, llamarás la API localStorage, que nos permite almacenar datos en el navegador y recuperarlos luego. Usarás la función setItem() de localStorage, que crea y almacena un dato en el elemento llamado 'nombre', y coloca este valor en la variable miNombre que contiene el nombre que el usuario ingresó. Finalmente, establecerás el textContent del título a una cadena, más el nombre de usuario recientemente almacenado.
*/

/* 
Luego, agregarás este bloque if ... else. Se podría llamar a esto el código de inicialización, como se ha establecido para cuando carga la app por primera vez:
*/

if (!localStorage.getItem("nombre")) {
    estableceNombreUsuario();
  } else {
    let nombreAlmacenado = localStorage.getItem("nombre");
    miTitulo.textContent = "Mozilla es genial," + nombreAlmacenado;
  }
/* 
La primera línea de este bloque usa el operador de negación (NO lógico representado por !) para comprobar si el elemento 'nombre' existe. Si no existe, la función estableceNombreUsuario() se iniciará para crearlo. Si ya existe (como por ejemplo cuando el usuario ya ingresó al sitio), se recupera el dato del nombre usando getItem() y se fija mediante textContent del título a la cadena, más el nombre del usuario, como hiciste dentro de estableceNombreUsuario().
*/  

/* 
Finalmente, agrega abajo el evento onclick que manipulará el botón, de modo que cuando sea pulsado se inicie la función estableceNombreUsuario(). Esto permitirá al usuario establecer un nuevo nombre cada vez que lo desee al pulsar el botón:
*/

miBoton.onclick = function () {
    estableceNombreUsuario();
  };
/*
Ahora cuando visites tu sitio por primera vez, este te pedirá tu nombre y te dará un mensaje personalizado de bienvenida. Puedes cambiar cuantas veces quieras el nombre al presionar el botón. Y como un bonus añadido, ya que el nombre se almacena en el localStorage, este permanecerá después de que cierre el sitio, ¡manteniendo ahí el mensaje personalizado cuando abras el sitio la próxima vez!
*/

/* 
¿Un nombre de usuario nulo?
Cuando ejecutes el ejemplo y obtengas el cuadro de diálogo que solicita que introduzcas tu nombre de usuario, intenta pulsar el botón Cancelar. Deberías terminar con un título que diga que Mozilla es genial, null. Esto sucede porque, cuando cancelas el mensaje, el valor se establece como null. Null (nulo) es un valor especial en JavaScript que se refiere a la ausencia de un valor.

Además, prueba a dar clic en Aceptar sin introducir un nombre. Deberías terminar con un título que diga que Mozilla es genial, por razones bastante obvias.

Para evitar estos problemas, podrías comprobar que el usuario no ha introducido un nombre en blanco. Actualiza tu función estableceNombreUsuario(), vamos hacia arriba
*/