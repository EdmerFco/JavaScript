function saludar (nombre ){
    console.log(arguments);
    console.log('hello ' + nombre);
    return 1;

    // console.log('edmer');
}



const saludar2 = function (nombre) {
    console.log(arguments);
    console.log('hello ' + nombre);

}
// saludar2('Edmer fco', 40, true, 'mexico');

const saludarFlecha =  () => {
    console.log('hello flecla');

}
const saludarFlecha2 =  (nombre) => {
    console.log('hello '+ nombre);

}

const retornDeSaludar = saludar('Edmer fco', 40, true, 'mexico');
console.log({retornDeSaludar});

// saludarFlecha();
// saludarFlecha2('Melissa');

function suma(a,b){
    return a + b;
}

// const suma2 = (a,b) => {
//     return a + b;
// }

const suma2 = (a,b) => a + b;
console.log(suma(11,20));
console.log(suma(1,2));

function getAleatori() {
    return Math.random();
}

const getAleatoro = () => Math.random();

console.log(getAleatoro());

console.log(getAleatori());