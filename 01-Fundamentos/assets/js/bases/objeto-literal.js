let  personaje = {
    nombre: 'Edmer Fco',
    codeName: 'Paco',
    vivo: true,
    edad: 21,
    coords:{
        lat: 34.034,
        lng: -118.70
    },
    trajes:['Nike', 'Adidas', 'Jordan'],
    direccion: {
        zip: 'mesa del jaguey/ 36',
        ubicacion: 'mesa del jaguey, agua zarca, landa de matamoros, QRO',
    }, 
    'ultima-pelicula': 'universidad'
};

console.log(personaje);

console.log('Nombre: ', personaje.nombre);
console.log('Nombre: ', personaje['nombre']);

console.log('Edad: ', personaje.edad);

console.log('Coors: ', personaje.coords);
console.log('Lat', personaje.coords.lat);

console.log('No. Trajes: ', personaje.trajes.length);

console.log('ultimo traje', personaje.trajes[personaje.trajes.length-1]);

const x = 'vivo';

console.log('Vivo', personaje[x]);

console.log('Ultima pelicula: ', personaje["ultima-pelicula"]);


// Mas Detalles 

delete personaje.edad;
console.log(personaje);

const entriesPares = Object.entries(personaje);

console.log(entriesPares);
console.log(entriesPares[entriesPares.length-1]);

personaje.casado = true;
console.log(personaje);

Object.freeze(personaje);

personaje.mujer = false;
personaje.direccion.ubicacion = 'Mexico';
console.log(personaje);

const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log(propiedades, valores);