/* Condicional Switch CASE

El SWITCH es una estructura de control utilizada para tomar decisiones basadas em el valor de una expresion/condicion
Es util cuando se desea comparara un mismo valor con multiples casos posibles y ejecutar un bloque de codigo segun 
el caso que coincida.
*/

let valor; 
valor = parseInt(prompt(`Ingrese valores numericos entre 1 y 3`));

switch (valor) {
    case 1:
        document.writeln(`Usted ingreso el número: `, valor);
        break; 
    case 2:
        document.writeln(`Usted ingreso el número: `, valor);
        break; 
    case 3:
        document.writeln(`Usted ingreso el número: `, valor);
        break; 

    default:
        document.writeln(`El número está fuera del rango o no es un número válido`)
} 
document.write('<br>');


let color 
color = prompt(`Ingrese uno de estos colores: Rojo, Verde, Azul`)

switch (color) {
    case "Rojo":
        document.writeln(`Usted ingreso el color: `, color);
        break;
    case "Verde":
        document.writeln(`Usted ingreso el color: `, color);
        break;
    case "Azul":
        document.writeln(`Usted ingreso el color: `, color);
        break;

    default:
        document.writeln(`El color está fuera del rango o no es un color válido`)
}