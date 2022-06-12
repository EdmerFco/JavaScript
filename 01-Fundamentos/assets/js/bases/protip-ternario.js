const numeroMayor = (a,b) => {
    return (a >= b) ? a : b;}

const tinesMimbresia = (mienbro) => (mienbro) ? 'Pagar 2 Dolar' : 'Pagar 10 dolar';

console.log(numeroMayor(100, 150));
console.log(tinesMimbresia(false));

const amigo = true;
const amigosArr = [
    'Piter',
    'Mercury',
    'Ghostemane',
    amigo ? 'Thor' : 'Loky',
    // (() => 'Neck Fury')(), funcion anonima autoejecutable
    numeroMayor(20, 200),
]

console.log(amigo, amigosArr)

const nota = 9.5;

const calificacion = (nota >= 9.5) ? 'Au' :
                     (nota >= 9)   ? 'DE':
                     (nota >= 8)  ? 'SA' : 'NA';

console.log(calificacion);