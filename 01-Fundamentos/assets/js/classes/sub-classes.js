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

class Heroe extends Persona{
    clan = 'sin Clan';
    constructor(nombre, codigo, frase) {
        super(nombre, codigo, frase);
    }

    quineSoy() {
        console.log(`soy ${this.nombre}, ${this.clan}`);
        super.quineSoy();
    }

}

const spiderman = new Heroe('Peter Parker', 'Spider', 'un gran poder conlleva una gran responsabilidad');
// const spiderman = new Heroe('sin clan');

console.log(spiderman);
spiderman.quineSoy();
// const Wolverine = new Persona('Logan', 'Wolverine', 'X-men');

