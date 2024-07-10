/* Explicando codigo:
    tenemos que cabiar el titulo de Mozilla is cool a Hola Mundo
    tenos 2 opciones:
    a) cambiar el titulo directamente desde el html
    b) cambiarlo con js
    
    lo que haremos es crear una variable const miTitulo donde guardaremos lo que hara, es decir, del documento html, ocuparemos una propiedad llamada querySelector, esto con la intencion de seleccionar una consulta, en este caso el h1, que es del titulo.
    una vez hecho esto, usamos la variable y tambien una propiedad llamada textContent, esto para cambiar el titulo y guardamos

    explicacion de la documentacion:
    El texto del título ha sido cambiado por ¡Hola mundo! usando JavaScript. Hiciste esto primero usando la función querySelector() para obtener una referencia al título y almacenarla en una variable llamada miTitulo. Esto es muy similar a lo que hiciste con CSS usando selectores —quieres hacer algo con un elemento, así que tienes que seleccionarlo primero—.

    Después de eso, estableciste el valor de la propiedad textContent de la variable miTitulo (que representa el contenido del título) como ¡Hola mundo!

    Nota: Las dos características que has utilizado en este ejercicio forman parte de la API del Modelo de Objeto de Documento (DOM), que tiene la capacidad de manipular documentos.
    */
const miTitulo = document.querySelector("h1");
miTitulo.textContent = 'Hola Mundo!!!'