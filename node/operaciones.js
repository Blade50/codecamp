function suma(...operadores) {
  let suma = 0;
  operadores.forEach((numero) => {
    suma += numero;
  });
  return suma;
}

function resta(a, b, ...operadores) {
  if (operadores.length > 0) {
    let valor = a - b;
    operadores.forEach((valores) => {
      valor -= valores;
    });
    return valor;
  }
  return a - b;
}

//module.exports.sumar = suma;
//module.exports.restar = resta;

/* Otra forma de exportar modulos dado que export.module es un objeto
es tratarlo como tal  */
module.exports = {
   sumar: suma,
   restar: resta,
};
