function ordenada(n) {
  if (n < 1) {
    // Si n es menor que 1 devolverá un array vacio
    return [];
  } else {
    // llamada recursiva
    const tmp = ordenada(n - 1);
    // Dado que se quiere de mayor a menor los ingresaremos al principio del array
    tmp.unshift(n);
    return tmp;
  }
}

console.log(ordenada(10));
