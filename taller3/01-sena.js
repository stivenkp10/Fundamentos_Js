// Imprima 5 veces a palabras SENA

// Ciclo FOR (PARA)
console.log ("----- CICLO FOR ----- ");
for (let contador = 1; contador <= 5; contador++) {
    // Contador = 1 -> valor inicial 
    // Contador <= 5 -> condicion: Se repite mientras sea verdadera
    // contador++ -> Al final de cada vuelta, contador aumenta en 1 
    console.log ("SENA"); // Esto imprime cada una de las 5 vueltas
    
}

// Ciclo WHILE (MIENTRAS)
console.log ("----- CICLO WHILE ----- ");
let contadorwhile = 1;
while (contadorwhile <= 5) {
    // Se evalua la condicion antes de entrar a repetir el bloque
    console.log ("SENA");
    contadorwhile++; // Muy importante: debido a que si no se incrementa se vuelve ciclo infinito 
}

// ciclo DO-WHILE (REPETR O HACER MIENTRAS)
console.log ("----- CICLO DO-WHILE ----- ");
let contadorDowhile = 1 
do {
    console.log("SENA"); // Se ejecuta primero
    contadorDowhile++; //Luego se incrementa
} while (contadorDowhile <= 5); // Al final evalua la condicion
