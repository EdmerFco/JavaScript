class Persona {

    static _conteo = 0;
    static get conteo() {
        return Persona._conteo + ' instancias';
    }
    static mensaje() {
        console.log( this.name); //undefined
        console.log('Hola a todos, soy un meotodo estatico');
    }
 
    nombre = '';
    codigo = '';
    frase = '';
    comida = '';
    constructor(nombre= 'sin nombre',codigo='Sin codigo',frase='Sin frase') {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase =  frase;

        Persona._conteo++;
    }

    set setComidaFavorita(  comida ) {
        this.comida = comida.toUpperCase();
    }
    get getComidaFavorita() {
        return `La comida favorita de ${this.nombre} es ${this.comida}`;

    }
 
    quineSoy(){
        console.log(`Soy ${this.nombre} y mi identificador es ${this.codigo}`);
    }
    mifrase() {
        this.quineSoy();
        console.log(`${this.nombre} dice: ${this.frase}`);
    }
}

const spiderman = new Persona('Peter Parker', 'Spider', 'un gran poder conlleva una gran responsabilidad');
const Wolverine = new Persona('Logan', 'Wolverine', 'X-men');



// Persona._conteo = 2;
// console.log(spiderman);
// console.log(Wolverine);
// spiderman.quineSoy();
// spiderman.mifrase();
spiderman.setComidaFavorita = 'El pie de cereza de la tia May';

// console.log(spiderman.getComidaFavorita);
// console.log(spiderman);

console.log('Conte Estatico', Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();

Persona.propiedadExterna = 'Hola mundo';

console.log(Persona.propiedadExterna)
console.log(Persona);