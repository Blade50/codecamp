/* Reemplaza la frase usando los argumentos proporcionados y devolviendo la
 * frase resultante, tienes que tener en cuenta la capitalizacion de las
 * palabras reemplazadas
 */

function myReplace(str, before, after) {
  if (/^[A-Z]/.test(before)) {
    after = after[0].toUpperCase() + after.substring(1);
  } else {
    after = after[0].toLowerCase() + after.substring(1);
  }
  return str.replace(before, after);
}

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
