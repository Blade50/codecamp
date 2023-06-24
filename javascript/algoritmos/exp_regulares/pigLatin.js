/* Altera las palabras en inglés, las normas son las siguientes:
 * - Si una palabra comienza por una consonante, se mueve al final de la palabra
 *   y se le agregan los caracteres ay quedando consonante+ay
 * - Si una palabra empieza por vocal solo se agregan al final de la misma los
 *   caracteres way
 */

function tranlatePigLatin(str) {
  const vocal = /^[aeiou]\w*/;
  const consonante = /(^[^aeiou]+)(\w*)/;
  return str.replace(vocal, "$&way").replace(consonante, "$2$1ay");
}

// "california" debe devolver aliforniacay.
// "paragraphs" debe devolver aragraphspay.
// "glove" debe devolver oveglay.
// "algorithm" debe devolver algorithmway.
// "eight" debe devolver eightway.
// "schwartz" debe devolver artzschway.
// "rhythm" debe devolver rhythmay.
console.log(tranlatePigLatin("schwartz"));
