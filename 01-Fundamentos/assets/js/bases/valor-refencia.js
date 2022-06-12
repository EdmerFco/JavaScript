let a = 10;
let b = a; 
a = 30;

console.log({a, b});

let juan = { nombre: 'Juan'};

let ana = {...juan};

ana.nombre = 'Ana';
console.log({juan, ana});

const cabiarNombre = ({...persona}) => {
    persona.nombre = 'Tony';
    return persona;
}

let perla = {nombre: 'Peter'};
let tony = cabiarNombre(perla);

console.log({perla, tony});


// areglos

const futras = ['manzana','Mango', 'pera'];


console.time('slice');
const otrasFrutas = futras.slice();
console.timeEnd('slice');


console.time('spread');
const otrasFrutas2 = [...futras];
console.timeEnd('spread');

otrasFrutas.push('piña');

console.table({futras, otrasFrutas, otrasFrutas2});