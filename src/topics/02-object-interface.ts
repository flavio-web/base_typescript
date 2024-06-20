
export interface Usuario {
    email       : string;
    password    : string;
    edad        : number;
    isAdmin     : boolean;
    address?    : string;
    numeroCasa? : number;
    telefono?   : string | number;
    firstName   : string;
    lastName    : string;
    fullname?   : () => void;
}

const maria: Usuario = {
    firstName: 'Maria',
    lastName: 'Torres',
    email: 'maria@google.com',
    password: 'maria123',
    edad: 25,
    isAdmin: false,
    telefono: '565465561'
};

const pedro: Usuario = {
    email: 'pedro@google.com',
    password: 'pedro123',
    edad: 30,
    isAdmin: true,
    address: 'Riobamba',
    numeroCasa: 324,
    firstName: "Pedro",
    lastName: "Garcia"
}


console.log({
    maria,
    pedro
});
