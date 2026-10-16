// Equilatero: Tres lados iguales
// Isosceles: Dos lados iguales
// Escaleno: Ningun lado igual

const ladoA = 2;
const ladoB = 2;
const ladoC = 2;

// Primero validamos que ningun lado sea cero o negativo
if (ladoA <= 0 || ladoB <= 0 || ladoC <= 0) {
    console.log ("Los lados deben ser mayores que cero");
    // "||" Es el operador "o" basta con que una de las condiciones se cumpla
} else if (ladoA + ladoB <= ladoC || ladoA + ladoC <= ladoB || ladoB + ladoC <= ladoA) {
    // Regla geometrica: la suma de los lados siempre debe ser mayor que el tercer lado, sino, no se puede 
    console.log("Los valores no forman un triangulo valido");
} else if (ladoA === ladoB && ladoB === ladoC) {
    //operador "&&" es el operador "Y"
    console.log ("El triangulo es EQUILATERO");
} else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
    // Si no es equilatero, pero al menos dos de los lados coinciden es isosceles.
    console.log ("El triangulo es ISOSCELES");
} else {
    // Si no se cumplen ninguna de las condiciones anteriores, quiere decir que todos los lados son distintos
    console.log ("El triangulo es ESCALENO");
}

