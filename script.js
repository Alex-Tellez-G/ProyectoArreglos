// 1. Crear un array vacío, luego generar 10 números al azar y guardarlos en un array. Mostrar en consola el resultado del array.
// Crear un array vacío
let array = [];

// Generar 10 números al azar y guardarlos en el array
for (let i = 0; i < 10; i++) {
    array[i] = Math.floor(Math.random() * 100) + 1; // Números entre 1 y 100
}

// Mostrar en consola el resultado del array
console.log("ejercicio 1 de Arreglos");
console.log(array);



// 2. El usuario deberá ingresar un string con varias palabras separadas por coma en un popup y se deben convertir en un array, 
// (el usuario ingresa: '1,2,3,4,5' y se convierte en [1,2,3,4,5]). Mostrar en consola dicho resultado.

// Ingresar un string con varias palabras separadas por coma en un popup
let input = prompt("Ingrese varias palabras separadas por coma");

// Convertir el string en un array
let array2 = input.split(",");

// Mostrar el array en consola
console.log("ejercicio 2 de Arreglos");
console.log(array2);

//3. De acuerdo al array [10,40,30,20,15,5], imprime lo siguiente: El arreglo ordenado de menor a mayor, 
//muestra el número menor y el número mayor. 
//Tip: Busca en google los métodos de JavaScript que regresan el mayor y menor elemento de un arreglo.

// Declarar el array
const array3 = [10,40,30,20,15,5]; 

// Ordenar el array de menor a mayor
array3.sort((a, b) => a - b);

// Imprimir el array ordenado
console.log("ejercicio 3 de Arreglos");
console.log(array3);


// 3.1 muestra el número menor y el número mayor. 
let min = Math.min(...array3);
let max = Math.max(...array3);

// Mostrar el número menor y el número mayor
console.log("El número menor es " + min + ". El número mayor es " + max);

