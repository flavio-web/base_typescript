
import { Usuario } from './02-object-interface';
import { Person, Trabajo } from './05-clases';

const juan: Usuario = {
    firstName: 'Juan',
    lastName: 'Torres',
    email: 'juan@google.com',
    password: 'juan123',
    edad: 25,
    isAdmin: false,
    telefono: '565465561'
};

const tonny = new Person('Tonny', 'tonny123', '41654656', 'Machala');
const tonny_trabjo = new Trabajo(1500, 'desarrollador web', tonny);

console.log( juan );