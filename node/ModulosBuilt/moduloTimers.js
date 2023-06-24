
/* Modulo Timers
 * Permite ejecutar una funcion pasado un periodo de tiempo estipulado, es una
 * forma de simular procesos asíncronos
 */ 

/* setTimeout(funcion,tiempo,[argumentos])
 * Ejecuta la funcion pasado el tiempo pasado en milisegundos
 */

function saludar(mensaje){
  console.log(`${mensaje}`);
}

setTimeout(saludar,1500,'Hola caracola');

/* setImmediate(funcion, [argumentos])
 * Ejecuta el código de forma asíncrona después de ejecutar todo el código 
 * síncrono
 */ 

console.log('Mensaje antes de setImmediate')
setImmediate(saludar,'Desde Immediate');
console.log('Codigo despues de Immediate');

/* setInterval(funcion, intervalo, [argumentos])
 * Ejecuta un código un número infinito de veces con un intervalo de tiempo
 * especificado en milisegundos.
 */ 

//setInterval(saludar,2000,'Saludo desde Interval');
