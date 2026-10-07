let a, b;
let c, d;

let suma, resta, mutiplicacion, division, residuo, potencia;

//obtener los datos a traves del usuario
a = prompt ("Ingrese un numero: ");
b = prompt ("Ingrese otro numero: ");

//Resultados de las operaciones
suma =  Number(a) + Number(b); //aqui la operacion da un error debido a que se concatenan los datos
document.write("La suma es: ", suma, "<br>");
console.log("La suma es: ", suma);

resta = Number (a) - Number(b);
document.write("La resta es: ", resta, "<br>");
console.log("La resta es: ", resta);

multiplicacion = a * b 
document.write("La multiplicacion es: ", multiplicacion, "<br>");
console.log("La multiplicacion es: ", multiplicacion);

residuo = a % b
document.write("El residuo es: ", residuo, "<br>");
console.log("El residuo es: ", residuo);

division = a / b
document.write("La division es: ", division, "<br>");
console.log("La division es: ", division);

potencia = a ** b
document.write("La potencia es: ", potencia, "<br>");
console.log("La potencia es: ", potencia);