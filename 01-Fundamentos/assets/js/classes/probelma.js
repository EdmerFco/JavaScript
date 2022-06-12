const ehdz = {
    nombre: 'Edmer',
    edad: 22,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - edad:${this.edad}`);
    }
}

// ehdz.imprimir();
function Persona(nombre, edad){
    console.log('se ejecuta esta linea');

    this.nombre = nombre;
    this.edad   = edad;
    this.imprimir = function()  {
        console.log(`Nombre: ${this.nombre} - edad:${this.edad}`);
    }
}

const maria = new Persona('maria', 18);
const mellissa = new Persona('Melissa', 22);
console.log(maria);
maria.imprimir();
mellissa.imprimir();