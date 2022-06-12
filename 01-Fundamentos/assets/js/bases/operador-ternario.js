/**
 * Dias de la sema a las 11 abrimos
 * pero los fones de seman abimos a las 9 
 */

// Entras a un sitio web, para consultar si estas abierto hoy.. 
const fecha = new Date();
const dia = fecha.getDay();
const horaActual = fecha.getHours();


let horaApertura;
let mensaje; // Esta abiert, esta Cerrado, hoy abrimos a xx

// //  if (dia === 0 || dia === 6){
//     if([0,6].includes(dia)){ // sintaxix mas facil de leer pero hace lo mismo que un if
//      console.log('fin de semana');
//      horaApertura = 9;
//  }else{
//      console.log('Dia de semana');
//      horaApertura = 11;
//  }

horaApertura = ([0,6].includes(dia)) ? 9 : 11;

//  if(horaActual >=  horaApertura ){
//      mensaje = `Estamos abiertos ven ya`;
//  }else {
//      mensaje = `Estamos serrados, la hora de apertura es a las ${horaApertura}`;
//  }

 mensaje = (horaActual >=  horaApertura ) ?   `Estamos abiertos ven ya` : `Estamos serrados, la hora de apertura es a las ${horaApertura}`;
console.log({horaApertura, mensaje});