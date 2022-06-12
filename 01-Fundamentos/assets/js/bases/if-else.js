

let a = 120;

if( a <= 10) {
    console.log('A es menor de 10');

} 
else {
    console.log('a es mayor a 10');
}

console.log('Fin del programas');

const hoy = new Date();

console.log(hoy);

const dia = hoy.getDay();

console.log({dia});

if( dia === 0 ){
    console.log('es domingo');

}
else if (dia === 1){
    console.log("El dia es luenes");
}else if(dia === 2){
    console.log('el dia es martes');
}else{
    console.log('el dia no e smartes, lunes o domingo....')
}

const diaLetra = {
   0:'Domingo', 
    1:'Lunes', 
    2:'Martes', 
    3:'Miercoles', 
    4:'Jueves', 
    5:'Viernes', 
    6:'Savado'};

console.log(diaLetra[dia] || "Dia no Definido" );

const diaArry = [
'Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Savado'
];

console.log(diaArry[dia]);
