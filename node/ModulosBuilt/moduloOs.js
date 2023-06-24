
/* Modulo os 
 * Contiene informacion del sistem operativo sobre el cual se está ejecutando Node.
 * Ete modulo no está de forma global por lo cual se tendra que importar
 */ 
const os = require('os')

console.log(os.type()) // Devuelve el sistema operativo 
console.log(os.homedir()) // Devuelve el directorio principal del usuario
console.log(os.userInfo()) // Devuelve informacion del usuario
