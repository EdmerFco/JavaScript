// function crearPersona(nombre, apellido) {
//     return {
//         nombre,
//         apellido,
//     }
// }

const crearPersona = (nombre, apellido) => ({nombre, apellido})
const persona = crearPersona('edmer fc', 'Hernandez');
console.log(persona);

function imprimirArgumnetos() {
    console.log(arguments);
}

// imprimirArgumnetos(10,'Edmer', 'Francisco', true);


// const imprimirArgumnetos2 = (edad, ...args) => {
//     console.log({edad, args});
// }
// imprimirArgumnetos2(10,'Edmer', 'Francisco', true);

const imprimirArgumnetos2 = (edad, ...args) => {
    return args;
}
const [casado, nombre, apellido, vivo] = imprimirArgumnetos2(10,'Edmer', 'Francisco', 'true');
console.log({casado, nombre, apellido, vivo})

const crearPersona2 = (nombre, apellido) => ({nombre, apellido})
const {apellido: nuevoApellido} = crearPersona2('edmer fc', 'Hernandez');
console.log({nuevoApellido});

console.log(crearPersona2);

let  Edmer = {
    nombre: 'Edmer Fco',
    codeName: 'Paco',
    vivo: true,
    // edad: 21,
    trajes:['Nike', 'Adidas', 'Jordan'],
};

// const imprimirArr = (persona) => {
//     console.log(persona.nombre);
//     console.log(persona.codeName);
//     console.log(persona.vivo);
//     console.log(persona.edad);
//     console.log(persona.trajes);
// }

const imprimirArr = ({nombre, codeName,vivo,edad =0 ,trajes}) => {
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}

imprimirArr(Edmer);