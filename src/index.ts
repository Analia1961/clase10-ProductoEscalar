//Clase 10: 20 de mayo de 2022 - Estructuras de Datos y Métodos

//EJERCICIOS EN CLASE : Producto Escalar

/* • Cargue dos arreglos de dimensión N números (la cantidad es ingresada por el usuario)
• Calcule el producto escalar entre los dos arreglos:*/

/*Ejemplo:
n = 3
v1 = 0, 1, 2
v2 = 3, 4, 5
producto = 14
*/

let calcularProductoEscalar = (
  arreglo1: number[],
  arreglo2: number[],
  longitud = number
): number => {
  let productoEscalar: number = 0;
  let indice: number;

  for (indice = 0; indice < longitud; indice++) {
    productoEscalar = productoEscalar + arreglo1[indice] * arreglo2[indice];
  }

  return productoEscalar;
};

let dimension: number = 3;
let dimension: number = Number(prompt("Ingrese la dimension del arreglo")); //PRACTICAR DE ESTA MANERA
// En este caso deberian usar la funcion ya creada cargaArreglo(), pasarle por parametro arreglo y longitud
let arreglo1: number[] = [3, 4, 5];
let arreglo2: number[] = [6, 3, 9];

console.log(calcularProductoEscalar(arreglo1, arreglo2, dimension));
