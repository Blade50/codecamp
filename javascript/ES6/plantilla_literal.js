/*
 * Una de las caracteristicas  de ES6 son la plantilla literales, un tipo
 * de cadena multilinea
 * para crearla es necesario el uso de backtricks o comilla invertida " ` " tanto
 * al principo como al final de la cadena y el uso de los caracteres ${} para
 * mostrar variables no será necesario la concatenacion con el caracter +
 */
let name = "Rodrigo";
let firstname = "Diaz de Vivar";
console.log(
  `Mi nombre es ${name} 
mi apellido es ${firstname} 
nací en Burgos`
);
