/*
 * ES6 Simplifo la forma de crear objeto literales,simplificando la forma y
 * eliminando la redundancia de duplicar adjetivos
 */

// Creacion objeto ES5
const user = function (name, age, gender) {
  return {
    name: name,
    age: age,
    gender: gender,
  };
};

console.log(user("Pedro", 34, "masculino"));

// Creacion desde ES6
const createPerson = (name, age, gender) => ({ name, age, gender });
let person1 = createPerson("Judith", 25, "femenino");
console.log(person1);

/* Para crear metodos dentro de objetos no es necesario usar la palabra function
 * y los : despues del nombre, ambas cosas son suprimidas
 */
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  },
};
bicycle.setGear(3);
console.log(bicycle.gear);
