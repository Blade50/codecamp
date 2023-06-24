/* Devuelve un array ordenado ascendente iniciado en el numero inicial
 * hasta el numero final inclusiva utilizando recursion
 * @param startNum (int) valor inicial del array
 * @param endNum (int) valor final del array
 * @ return array
 */
function rangeOfNumbers(starNum, endNum) {
  /* if (starNum >= endNum) {
    return [starNum];
  } else {
    const tmp = rangeOfNumbers(starNum, endNum - 1);
    tmp.push(endNum);
    return tmp;
  } */

  return starNum === endNum
    ? [starNum]
    : rangeOfNumbers(starNum, endNum - 1).concat(endNum);
}

console.log(rangeOfNumbers(-2, 8));
