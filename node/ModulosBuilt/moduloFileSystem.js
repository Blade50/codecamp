
/* Modulo fs
 * El modulo fs(file system) sirve para manipular ficheros del sistema, este
 * modulo no es global por lo cual se tendrá que importar para su uso
 * Este modulo es asincrono por defecto pero se pueden realizar operaciones
 * sincronas para lo cual se debe colocar la expresion "Sync" al final del
 * nombre de la funcion.
 */ 
const fs = require('fs')

/* .readFile(fichero,codificacion, callback)
 * Lee un fichero, se le tendrá que pasar por parámetro la ruta del fichero a
 * leer, la codificación de salida y una función callback que se llamará una 
 * vez leido el fichero
 */

fs.readFile('main.txt','utf8',(error, contenido)=> {
  // En caso de producirse un error 
  if(error) {
    console.log('Error no se ha podido leer el fichero');
    throw error // Para la ejecución del programa 
  }
  console.log(contenido) // Muestra el contenido del fichero
})

/* .writeFile(fichero, contenido, callback)
 * Esccribe datos en un fichero, si el fichero no está vacio sobreescribira los
 * datos, si el fichero no existe lo crea nuevo
 */ 
fs.writeFile('fichero.md','Fichero creado de nuevo', (err) =>{
  err ? console.log(err) : console.log('Fichero creado..')
})

/* .appendFile(fichero, contenido, callback)
 * Agrega el contenido al final de un fichero existente 
 */ 
fs.appendFile('fichero.md','\nTexto agregado con appendFile',(err) => {
  err ? console.log(err) : console.log('Texto agregado.')
})

/* .rename(fichero,nuevo_nombre,callback)
 * Renombra el fichero pasado por parámetro, devolvera una función callback una
 * finalizada la opracion
 */ 
// fs.rename('fichero.txt','main.txt',(err) => {
//   if(err) {
//     console.log('Error al renombrar fichero')
//     throw err 
//   }
//   console.log("Fichero renombrado correctamente");
// })

/* .unlink(fichero, callback)
 * Elimina un fichero existente
 */
fs.unlink('main.txt',(err) => {
  if (err) throw err; console.log('Fichero eliminado')
})
