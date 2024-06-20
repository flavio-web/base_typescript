
function addNumeros( a: number, b: number ): string
{
    return Number(a + b).toFixed(2);
}

const addNumerosArrow = ( a: number, b: number ): number =>{
    return a + b;
}


const numeros = addNumeros( 10, 20 );
console.log( 'resultado', numeros );

export {};