/* (POO) Programación Orientada a Objetos

La POO es un paradigma de la programacion que organiza el software en clases y objetos para modelar concpetos del 
mundo real. Este enfoque promueve la reutilizacion del codigo, modularidad y mejor organizacion del software
 */ 

// Crear el objeto Automovil

document.writeln(`Creación de Objeto AUTOMOVIL <br>`);
document.writeln(`<br>`);
var Auto = {
    marca: `Toyota`,
    modelo: `Corolla`,
    color: `Gris`,
    año: `2026`,
    combustible: `Diesel`,
    tipo: `Sedan`,
    radio: [`FM`, `MP4`, `USB`]
}

// Acceso a las propiedades: Se utiliza la notacion de punto (Auto.maraca) para acceder a las propiedades del objeto.

document.writeln(`Marca: ${Auto.marca}<br>`);
document.writeln(`Modelo: ${Auto.modelo}<br>`);
document.writeln(`Color: ${Auto.color}<br>`);
document.writeln(`Año: ${Auto.año}<br>`);
document.writeln(`Combustible: ${Auto.combustible}<br>`);
document.writeln(`Tipo: ${Auto.tipo}<br>`);
document.writeln(`Radio: ${Auto.radio}<br>`);

document.writeln(`<br>`);
document.writeln(`Clase vehículo con objeto ferrari`, `<br>`);

class Vehiculos {
    // Atributos
    marca = `Toyota`;
    modelo = `Corolla`;
    color = `Gris`
    año = `2026`;
    combustible = `Diesel`;
    tipo = `Sedan`;
    precio = `$78.285.000`;

    // Métodos 
    // Representan acciones o comportamientos en este caso del vehiculo.
    acelerar(){
        return `El ${this.marca} acelera de 0 a 100 km/h en tan sólo 3 segundos.`;
    }
    frenar(){
        return `El ${this.modelo} puede frenar de 100 km/h a 0 km/h en tan sólo 2.5 segundos.`;
    }
}

// Crear un Objeto basado en la Clase Vehículos
const ferrari = new Vehiculos();
// Se declara una constante luego la palabra reservada new, que significa que esta creando una nueva instancia de tipo objecto y al 
// colocar el nombre de la clase para este nuevo objeto tendra a disposicion los atributos y metodos de la clase previamente creada.

// Mostrar las propiedades y metodos del objeto ferrari
document.writeln(`<br>`);
document.writeln(`Marca: ${ferrari.marca}<br>`);
document.writeln(`Modelo: ${ferrari.modelo}<br>`);
document.writeln(`Color: ${ferrari.color}<br>`);
document.writeln(`Año: ${ferrari.año}<br>`);
document.writeln(`Combustible: ${ferrari.combustible}<br>`);
document.writeln(`Tipo: ${ferrari.tipo}<br>`);
document.writeln(`Precio: ${ferrari.precio}<br>`);
document.writeln(`Acelerar: ${ferrari.acelerar()}<br>`);
document.writeln(`Frenar: ${ferrari.frenar()}<br>`);

document.writeln(`<br>`);
document.writeln(`<br>`);
document.writeln(`CLASE ANIMALES CON OBJETO LEÓN`, `<br>`);

class Animales {
    // Atributos
    nombre = `Animal`;
    especie = `Desconocida`;
    habitat = `Desconocida`;
    dieta = `Desconocida`;
    velocidad = `Desconocida`;
    altura = `Desconocida`;
    peso = `Desconocido`;
    
    // Métodos 
    // Representan acciones o comportamientos en este caso del animal.
    dormir(){
        return `Un ${this.nombre} duerme en la ${this.habitat} durante el día y caza por la noche.`;
    }
    comer(){
        return `El ${this.nombre} es ${this.dieta} y se alimenta principalmente de antílopes y cebras.`;
    }
    velocidadMax(){
        return `El ${this.nombre} puede alcanzar una velocidad máxima de ${this.velocidad}.`;
    }
}

// Crear un Objeto basado en la Clase Vehículos
const leon = new Animales();
leon.nombre = `León`;
leon.especie = `Africana`;
leon.habitat = `Sabana Africana`;
leon.dieta = `Carnívoro`;
leon.velocidad = `80 km/h`;
leon.altura = `1.2 m`;
leon.peso = `190 kg`;

document.writeln(`<h2>${leon.nombre}</h2>`);
document.writeln(`Especie: ${leon.especie}<br>`);
document.writeln(`Velocidad: ${leon.velocidad}<br>`);
document.writeln(leon.dormir(), `<br>`);
document.writeln(leon.comer(), `<br>`);
document.writeln(leon.velocidadMax(), `<br>`);

document.writeln(`<br>================================`);

/* Herencia Subclases y Metodos */

class Deportistas {
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        
    }
}

class Futbolista extends Deportistas {
    constructor(nombre, apellido, goles){
        super(nombre, apellido);
        this.goles = goles;
    }

    get goles(){
        return this._goles;
    }
    set goles(newGoals){
        this._goles = newGoals;
    }
}

let futbolista2 = new Futbolista(`Lionel`, `Messi`, 937);

document.writeln(`<br>`);
document.writeln(`Nombre: ${futbolista2.nombre}<br>`);
document.writeln(`Apellido: ${futbolista2.apellido}<br>`);
document.writeln(`Goles anotados: ${futbolista2.goles}<br>`);