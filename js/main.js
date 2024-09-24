// Clases
class Empleado {
    constructor(nombre, edad, sueldo) {
        this.nombre = nombre;
        this.edad = edad;
        this.sueldo = sueldo;
    }
}

// Funciones
function empleadoExiste(nombre) {
    return empleados.some( (el) => {
         return el.nombre.toLowerCase() === nombre.toLowerCase();
    });
}

function obtenerIndiceEmpleado(nombre) {
    return empleados.findIndex( (el) => {
        return el.nombre.toLowerCase() === nombre.toLowerCase();
    });
}
function eliminarEmpleado() {

    // Chequeamos que el nombre exista
    let nombre = prompt("Ingrese el nombre del empleado a eliminar");

    let indiceEmpleado = obtenerIndiceEmpleado(nombre);
    while(indiceEmpleado === -1) {
        alert("EMPLEADO NO EXISTE");
        nombre = prompt("Ingrese el nombre del empleado a eliminar");
        indiceEmpleado = obtenerIndiceEmpleado(nombre);
}    empleados.splice(indiceEmpleado, 1);

alert("EMPLEADO ELIMINADO");
console.log(empleados);
}
function promedioDeSueldos() {

    const totalDeSueldos = empleados.reduce( (acc, el) => {
        return acc + el.sueldo;
    }, 0);

    const promedio = totalDeSueldos / empleados.length;

    alert(`EL PROMEDIO DE SUELDO ES: $${promedio}`);
}

function buscarEmpleadoPorNombre() {

    const nombre = prompt("Ingrese el nombre a buscar");

    const empleadosFiltrados = empleados.filter( (el) => {
        return el.nombre.toLowerCase().includes(nombre.toLowerCase());
    });
    const nombresEmpleados = empleadosFiltrados.map( (el) => {
        return el.nombre;
    });

    alert(`Los empleados encontrados son: ${nombresEmpleados.join(', ')}`);
}

function buscarEmpleadoPorEdad() {
    let edad = parseInt(prompt("Ingrese la edad"));

    while(isNaN(edad) || edad < 18) {
        alert("TIENE QUE SER MAYOR O NÚMERO ERRONEO");
        edad = parseInt(prompt("Ingrese la edad"));
    }

    const empleadosFiltrados = empleados.filter( (el) => {
        return el.edad === edad;
    });

    const nombresEmpleados = empleadosFiltrados.map( (el) => {
        return el.nombre;
    });

    alert(`Los empleados encontrados son: ${nombresEmpleados.join(', ')}`);
}

function buscarEmpleado() {
    let opcion = parseInt(prompt(`1- Buscar por nombre
2- Buscar por edad
0- Salir`));

    while(opcion !== 0) {

        switch(opcion) {
            case 1:
                buscarEmpleadoPorNombre();
                break;

            case 2:
                buscarEmpleadoPorEdad();
                break;

            default:
                alert("OPCIÓN INCORRECTA");
                break;
        }

        // Volvemos a pedir la opción
        opcion = parseInt(prompt(`1- Buscar por nombre
2- Buscar por edad
0- Salir`));
    }
}

function crearEmpleado() {

    // Pedir el nombre y chequear que no esté repetido
    let nombre = prompt("Ingrese el nombre del empleado");
    while(empleadoExiste(nombre)) {
        alert("Empleado existe");
        nombre = prompt("Ingrese el nombre del empleado");
    }

    // Pedimos edad y sueldo
    let edad = parseInt(prompt("Ingrese la edad"));
    while(edad < 18) {
        alert("TIENE QUE SER MAYOR");
        edad = parseInt(prompt("Ingrese la edad"));
    }

    let sueldo = parseFloat(prompt("Ingrese el sueldo"));
    while(sueldo <= 0) {
        alert("TIENE QUE COBRAR MÁS DE $0");
        sueldo = parseInt(prompt("Ingrese el sueldo"));
    }

    // Creamos el empleado
    const empleado = new Empleado(nombre, edad, sueldo);

    // Lo agregamos al array
    empleados.push(empleado);
}

// Inicio del programa
const empleados = [
    new Empleado("Carlos", 30, 5000),
    new Empleado("Pedro", 20, 3000),
    new Empleado("Martin", 25, 9000),
    new Empleado("Pepe", 30, 9000),
];

let textoOpciones = `1- Crear un nuevo empleado
2- Buscar un empleado
3- Promedio de sueldos de empleados
4- Eliminar empleado
0- Salir`;

let opcion = parseInt(prompt(textoOpciones));

while(opcion !== 0) {

    switch(opcion) {
        case 1:
            crearEmpleado();
            break;

        case 2:
            buscarEmpleado();
            break;

        case 3:
            promedioDeSueldos();
            break;

        case 4:
            eliminarEmpleado();
            break;

        default:
            alert("OPCIÓN INCORRECTA");
            break;
    }

    // Volvemos a pedir la opción
    opcion = parseInt(prompt(textoOpciones));
}