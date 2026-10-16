// Escribe el factorial de un numero

const n = 5;

console.log ("---- CICLO PARA -----");
let factorialFor = 1;
for (let i = 1; i <= n; i++) {
    factorialFor *= i;   
}
console.log(`El factorial de ${n} es:`, factorialFor);

//Ciclo WHILE (MIENTRAS)
console.log ("---- CICLO MIENTRAS -----");
let factorialWhile = 1;
let i = 1;
while (i <= n) {
    factorialWhile *= i;
    i++;
}
console.log(`El0 factorial de ${n} es:`, factorialWhile);
