
/* Exportar modulos
 * Para exportar un modulo se utiliza el objeto "module.export" seguido de un
 * nombre y con valor la funcion que deseamos exportar
 */

function sumar(a,b) {
  return a + b;
}

//module.exports.funcionSumar = sumar; 


/* Dado que module.exports es un objeto se podrán exportar varias funciones a 
 * la vez usando pares de clave:valor
 */

module.exports = {
  funcionSumar: sumar,
  functionRestar: restar,
}

/* Para poder usar los modulos exportardos se tendrán que importar a otro scrip
 * para de esa forma poder ser usados, en una constante se almacenará la ruta
 * del script donde se encuentran los modulos exportados.
 * En el caso que únicamente queramos importar algunos elementos exportados se
 * podrá usar el operador de desestructuracion "{ }" y añadir el nombre del 
 * elemento o elementos separados por comas (,) a importar.
 */ 

const operadores = require("ruta scrtip.js");
const { sumar, resta } = require('ruta script.js')

 console.log(operadores.sumar(24, 6, 8, 12));
console.log(operadores.restar(24, 6));
