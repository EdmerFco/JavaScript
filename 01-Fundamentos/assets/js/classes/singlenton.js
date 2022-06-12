

class Singleton {

    static instancia; // estancia inicialidada de la clase // undefine
    nombre = '';

    constructor(nombre = ''){
        
        if(!!Singleton.instancia){
            return Singleton.instancia;
        }
        Singleton.instancia = this;
        this.nombre = nombre;

        return this;

    }
} 

const instancia1 = new Singleton('Edmer Fco');
const instancia2 = new Singleton('Paco');
const instancia3 = new Singleton('Francisco');

console.log( `Nombre en l instancia es: ${instancia1.nombre}`);
console.log(`Nombre en la instancia2 es: ${instancia2.nombre}`);
console.log(`Nombre en la instancia3 es: ${instancia3.nombre}`);