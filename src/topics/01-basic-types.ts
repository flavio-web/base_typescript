

let nombre: string = 'Atom';
let edad: number = 30.20;
const isAdmin: boolean = true;

let cedula: string | number | undefined;
cedula = '04578451251';

let fecha: Date | string = new Date();
fecha = '2024-05-02 20:00:00';


const isAdministrador: null = null;

let nacimiento: any;
nacimiento = 'cadena';

let rol: 'ADMINISTRADOR' | 'SECRETARIA' | 'MENSAJERO';
rol = 'ADMINISTRADOR';

/****
 * 
 * Arreglos
 * 
 * ****/

const colores: string[] = [ 'amarillo', 'azul', 'verde', 'cafe' ];
colores.push( 'naranja' );



console.log({ 
    nombre, 
    edad: Number(edad), 
    isAdmin, 
    cedula, 
    fecha,
    isAdministrador,
    nacimiento,
    rol,
    colores
});

export {};