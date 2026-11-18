// ===========================================================
// EJERCICIO 31 - AREA TRIANGULO
// Hallar el area de un triangulo
// ===========================================================

// Buscamos en el HTML los 2 inputs y la caja del resultado (por su ID)
const inputBase = document.getElementById("base");
const inputAltura = document.getElementById("altura");
// const inputTercero = document.getElementById("tercerValor");
// const inputCuarto = document.getElementById("cuartoValor");
const cajaResultado = document.getElementById("resultado");

function calcular() {
    // Si falta algun valor no se calcula 
    if (inputBase.value === "" || inputAltura.value === "" ) {
        cajaResultado.textContent = "El area del triangulo es: ";
        return;
}

// Lo que se escribe en un input es texto: Number() lo convierte en numero.
const base = Number(inputBase.value);
const altura = Number(inputAltura.value);
// const tercerValor = Number(inputTercero.value);
// const cuartoValor = Number(inputCuarto.value);

// hallar el area
const areaT = (base * altura) / 2 


// Mostrar los resultados en la pagina 
cajaResultado.innerHTML = 
    "El area del triangulo es : <b>" + areaT + "</b>"; 
    // "Suma menos el cuarto valor: <b>" + resultadoResta + "</b>";
}  

// Cada vez que se escribe en cuaquiera de los inputs, se vuelve a calcular 
inputBase.addEventListener("input", calcular);
inputAltura.addEventListener("input", calcular);
// inputTercero.addEventListener("input", calcular);
// inputCuarto.addEventListener("input", calcular); 