let nombre, edad, direccion, movil, email; // se pueden decalarar varias variables al mismo tiempo

// prompt es uma palabra reservada en JavaScript que despliega una funcion y sale un mensaje de tipo alert para el usuario 

nombre = prompt("Escriba su nombre: "); // pedir datos al usuario 
document.writeln(`Bienvenido: `, nombre, `<br>`);
console.log("Bienvenido:", nombre);

edad = prompt("Escriba su edad: "); // pedir datos al usuario
document.writeln(`Tu edad es: `, edad, `<br>`);
console.log("Tu edad es:", edad);

direccion = prompt(`Escriba su direccion: `); // pedir datos al usuario
document.writeln(`Tu direccion es: `, direccion, `<br>`);
console.log("Tu direccion es:", direccion);

movil = prompt(`Escriba su numero de movil: `); // pedir datos al usuario
document.writeln(`Tu movil es: `, movil, `<br>`);
console.log("Tu movil es:", movil);

email = prompt(`Escriba email: `); // pedir datos al usuario
document.writeln(`Tu email es: `, email, `<br>`);
console.log("Tu email es:", email);

//Para ejecutarlo necesitamos crear un archivo HTML 
// y enlzarlo con el ex.04.js, despues de esto damos clic derecho em el HTML
// y damos "Open with live server"1
