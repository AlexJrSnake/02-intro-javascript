// Arreglo en JS
// const Arreglo = new Array(100);
const Arreglo = [1,2,3];
// Arreglo.push(1);
// Arreglo.push(2);
// Arreglo.push(3);

let Arreglo2 = [ ...Arreglo , 5];
// Arreglo2.push(5)

const Arreglo3 = Arreglo2.map( (datos) => {
  // console.log(datos);
  return datos * 2; 
} );

console.log(Arreglo);
console.log(Arreglo2);
console.log(Arreglo3);