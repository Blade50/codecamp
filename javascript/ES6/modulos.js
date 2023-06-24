/* Se pueden exportar otros ficheros .js para ser reutilizados, a esta operacion
 * se la conoce como exportar modulos, dicha exportacion debe ser indicada en el
 * fichero HTML <script type='module' scr='fichero.js'></script>
 */

/* Exportar variables o funciones usa la expresion export { function  } o
 * bien agregando export a cada una de las funciones a exportar esta sintaxis es
 * conocida como name export
 */
function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

export { sumar, restar };

/* Otra sintaxis conocida como export default, es utilizada en el caso de exportar
 * unicamente un valor desde un script, ademas unicamente se podran usar en
 * funciones tanto anonimas como nombradas
 */
export default function (a, b) {
  return a + b;
}

/* export default suma (a,b){
    return a + b;
} */

/* Para importar las funciones se usara al princio del script la expresion import
 * {funciones} from 'ruta fichero', tambien se podra usar el comodin " * " seguido
 * del un nombre y la ruta para hacer referencia a todas las funciones de un script
 */
import { sumar, restar } from "./fichero.js";
import * as Operaciones from "./fichero.js";

/* Para importar una exportacion por defecto (export default) la sintaxis varia
 * dado que unicamente se agrega la ruta de donde se realilza la importacion
 */
import nombre from "ruta.js";
