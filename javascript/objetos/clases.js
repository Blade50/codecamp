/* En ES5 para definir un objeto usando una funcion contructora se usaba let
 * la expresion new para crear una instancia del objeto
 */

/* En ES6 se crea la sintaxis "class" que no es propiamente una clase como en
 * los lenguajes orientados a objetos y se crea un metodo constructor
 */

class Usuario {
  constructor(id, nombre, edad) {
    this.id = id;
    this.nombre = nombre;
    this.edad = edad;
  }
}

/* Los metodos get y set estan destinados para devolver o establecer los valores
 * de una propiedad y que no se acceda directamente a dicha propiedad, aunque
 * no existan las propiedades privadas por convencion se la identifica 
 * anteponiendo un guion bajo delante del nombre de la propiedad _propiedad
 */ 

