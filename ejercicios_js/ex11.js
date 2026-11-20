let a, b;

a=20
b=30

console.log (a == b); 
console.log (a < b);
console.log (a > b);

let pais, edad;
pais = prompt ("¿De que pais eres?");
edad = prompt ("¿Que edad tienes?");

if (pais == "Colombia" && edad >= 18) {
    document.writeln("Eres ciudadano del país de : ", pais);

}else {
    document.writeln("No eres ciudadano del país de Colombia o no eres mayor de edad");
}

// El operador || (OR) se utiliza para evaluar si al menos una de las condiciones es verdadera. 
// Si alguna de las condiciones es verdadera, el resultado sera veradero. Por ejemplo:

let day, month, year;
 day = prompt("Ingrese el dia (1-30): ")
 month = prompt ("Ingrese el mes (1-12): ")
year = prompt ("Ingrese el año (por ejemplo, 2023): ");

// convertir los valores ingresados a numeros

day = parseInt (day);
month = parseInt(month);
year = parseInt(year);

// validar si el dia, mes y año son validos
if (isNaN(day) || isNaN(month) || isNaN(year)) {
    document.writeln("Ingrese sólo numeros")
}else if (month == 1 || month == 2 || month == 3){
    document.writeln("Pertenece al primer trimestre del año")
}else {
    document.writeln("No pertenece al primer trimestre del año")
}



