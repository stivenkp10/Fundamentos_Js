/*ARRAYS O ARREGLOS 
un arrays es una estructura de datos que permite almacenar una colección ordenada de elementoes; estos elementos
pueden ser cadenas de texto, valores númericos, booleanos, entre otros. Igualmente podrian ser un conjunto de 
funciones e inclusive otros arrays.
*/

// Declaracion de un arrays vacio
let numeros = [];
//llenar un arrays con elementos, cada elemnto dentro del array se separa por comas.

numeros = [5, 4, 8, 12, 16, 35, 44, 2];
document.write('Elementos: ', numeros);
document.write('<br>');

//Un array puede crearce directamente sin ser declarado.
Numeros =[ 5, 10, 15 ,20, 25, 30, 35];
document.write('Elementos: ', Numeros);
document.write('<br>');

// visualizar uno o alguno de los elementos del array según parametro o indice indicado.
document.write('Elemento en la posicion 3: ', Numeros[3]);
document.write('<br>');
document.write('Elemento en la posicion 5: ', Numeros[0]);

// Cambiar un elemento del array indicando la posición y/0 ubicación existente y el valor del elemto a cambiar.
numeros [3] = 84;
document.write('Elementos: ', Numeros);
document.write('<br>--------------------------');
document.write('<br>');

// Array con valores de tipo o string
let frutas = ['manzanas', 'peras', 'mandarinas', 'naranja', 'uva'];
document.write('Elementos: ', frutas);
document.write('<br>');

//Metodo de los ARRAY

// Ver la cantidad de elemtos 
document.write('Cantidad de elementos del array de las frutas: ', frutas.length);
document.write('<br>');
document.write('Cantidad de elementos del array de las frutas: ', Numeros.length);
document.write('<br>------------------------');
document.write('<br>');

let abecedario = ['a','b','c','d','e','f','g','h','i','j','k','l'];
document.write('Elementos: ', abecedario);
document.write('<br>');
document.write(abecedario.sort()); // Organiza alfabéticamente las letras.
document.write('<br>');

// Función reverse organiza los elementos alfabéticamente pero en inversa. 
document.write(abecedario.reverse()); // Organiza alfabeticamente as letras.
document.write('<br>');
