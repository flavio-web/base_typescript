
export class Person {

    public name: string;
    public telefono: string;
    public address: string;

    public password: string;

    constructor( nombre: string, password: string, telefono: string, address: string ) {
        this.name       = nombre;
        this.telefono   = telefono;
        this.password   = password;
        this.address    = address;
    }


}

/* export class Trabajo extends Person {

   //private salario: number;
    //public puesto: string;

    constructor(
        private salario: number,
        public puesto: string,
        public name: string,
        public password: string,
        public telefono: string,

    ){
        super( name, password, telefono );
    }
} */

export class Trabajo{

       
    constructor(
        public salario: number,
        public puesto: string,
        public person: Person     
    ){}
}