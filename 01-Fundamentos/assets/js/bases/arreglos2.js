let juegos = ['zelda', 'Mario', 'Metrid', 'Chrono']; 
console.log('Large:' , juegos.length);

let primero = juegos[0];

let ultimo = juegos[juegos.length -1];

console.log({primero, ultimo}); 

juegos.forEach((elemento, indice, arr)=>{
    console.log({elemento, indice, arr});
});

let nuevaLonfitud = juegos.push('Mario');
console.log({nuevaLonfitud, juegos});

nuevaLonfitud = juegos.unshift('Fire Emblem');
console.log({nuevaLonfitud, juegos});


let juegoBorrado = juegos.pop();
console.log(juegoBorrado,juegos);


let juegosBorrados = juegos.splice(0,1);
console.log({juegosBorrados, juegos});

let mariodIndex = juegos.indexOf('Mario');
console.log({mariodIndex});