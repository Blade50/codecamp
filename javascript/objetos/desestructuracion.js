const user = { name: "John Doe", age: 34 };

const user2 = {
  johnDoe: {
    age: 34,
    email: "johnDoe@freeCodeCamp.com",
  },

  AnniLenox: {
    age: 56,
    email: "annilenox@gmail.com",
  },
};

/* La desestructuaracion permite extraer valores de objetos y asignarlos a una
 * variable o constantes
 * la sintaxis es:
 * cont { propiedad1, propiedad2, propiedadN  } = objeto
 */
const { name } = user; // Devolvera John Doe
// Se puede cambiar el nombre de la propiedad del objeto
const { name: nombre } = user;
console.log(nombre); // Devolvera John Doe

/* Se podra extraer igualmente de objetos anidadaos
 * la sintaxis es:
 * const { objeto_anidado: { propiedad1, propiedadN }} = objeto
 */
const {
  AnniLenox: { email },
} = user2;
console.log(email);

/*
 * Se puede usar la desestructuracion para extraer elementos de un array, la
 * diferencia con la propagaciom es que este desempaca todo el contenido en una
 * lista separada por comas
 */
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [, a, , b, , c] = array;
console.log(a, b, c);

/*
 * Se puede usar la desestructuracion para pasar objetos como parametros de una
 * funcion, su sintaxis es>
 * const nombre ({prop1, prop2}) => uso de las prop ;
 */
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85,
};

const media = ({ max, min }) => (max + min) / 2;
console.log(media);
