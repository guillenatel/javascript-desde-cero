/***`async`** y **`await`** son dos características de JavaScript que simplifican la escritura y
gestión de código asincrónico. Están diseñadas para hacer que el código asincrónico sea más legible y 
similar a un código síncrono, lo que facilita el desarrollo y el mantenimiento de aplicaciones.

- **Ventajas:**
    - **Legibilidad:** El uso de **`async/await`** hace que el código sea más claro y fácil de seguir, 
    especialmente en comparación con las estructuras de promesas y callbacks anidados.
    - **Sincronicidad Aparente:** Aunque el código es asincrónico en su ejecución, con **`async/await`** 
    parece que se está ejecutando de manera secuencial, lo que facilita el razonamiento sobre el flujo del programa.
    - **Manejo de Errores:** **`async/await`** simplifica la gestión de errores mediante el uso de bloques **`try...catch`**, 
    lo que facilita la captura y el manejo de excepciones.
- **Ejemplo:**
*/
async function obtenerDatos() {
try {
    const resultado = await hacerAlgoAsincronico();
    console.log(resultado);
} catch (error) {
    console.error('Ocurrió un error:', error);
}
}

/* Declaración de Funciones Asincrónicas*

- Explicación: Para utilizar `await`, debemos definir una función como `async`.
Esto indica que la función contendrá operaciones asincrónicas y que puede utilizar `await` dentro de ella. 
 La palabra clave `async` antes de la función la convierte automáticamente en una función asincrónica. */

async function miFuncionAsincronica() {
    // Código asincrónico aquí
}

/*Uso de `await` para Esperar la Resolución de Promesas

- Explicación:`await` se utiliza dentro de una función asincrónica para esperar la resolución de una promesa. 
Cuando se encuentra una expresión `await`, la ejecución de la función se pausa hasta que la promesa se resuelva o se rechace.
El valor resuelto de la promesa se almacena en una variable, que puede ser utilizada posteriormente. */

async function obtenerDatos() {
try {
    const resultado = await hacerAlgoAsincronico();
    console.log(resultado);
} catch (error) {
    console.error('Ocurrió un error:', error);
}
}

/*En este ejemplo, await se utiliza para esperar la resolución de la promesa hacerAlgoAsincronico().
La función obtenerDatos() se pausará hasta que la promesa se resuelva y, 
luego, continuará ejecutándose con el valor resuelto almacenado en la variable resultado. */


/*Compatibilidad del Navegador:

- `async/await` es una característica de JavaScript que se ha convertido en parte integral del lenguaje y 
es ampliamente compatible con los navegadores modernos. Esto significa que puedes utilizar `async/await` en aplicaciones web que 
se ejecuten en la mayoría de los navegadores populares, lo que simplifica la gestión de operaciones asincrónicas en el lado del cliente.

En cuanto a Node.js, `async/await` también es compatible en la mayoría de las versiones modernas de Node.js, 
lo que permite un desarrollo coherente tanto en el lado del servidor como en el lado del cliente.

- Ejemplo de Uso en un Navegador Web:

A continuación, se muestra un ejemplo de cómo utilizar `async/await` en un navegador web para
realizar una solicitud HTTP asincrónica utilizando la API **`fetch`** y también cómo interactuar con el DOM de manera asincrónica: */

/*
<!DOCTYPE html>
<html>
<head>
  <title>Ejemplo de async/await en el navegador</title>
</head>
<body>
  <div id="resultado">Resultado de la solicitud:</div>
  <script>
    async function obtenerDatos() {
      try {
        // Realizar una solicitud HTTP asincrónica usando fetch
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const datos = await respuesta.json();

        // Interactuar con el DOM de manera asincrónica
        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.textContent = `Título: ${datos.title}`;
      } catch (error) {
        console.error('Ocurrió un error:', error);
      }
    }

    // Llamar a la función asincrónica
    obtenerDatos();
  </script>
</body>
</html>

En este ejemplo, la función obtenerDatos() utiliza async/await para realizar una solicitud HTTP asincrónica y, luego,
interactúa con el DOM de manera asincrónica para mostrar los datos en la página web. 
Esto demuestra cómo async/await puede simplificar la gestión de tareas asincrónicas en un navegador web moderno.


*/

