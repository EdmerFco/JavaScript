
const fecha = new Date();

const dia = fecha.getDay();
console.log(dia);

switch(dia) {
    case 0:
        console.log('hoy es domindo');
        break
    case 1:
        console.log('hoy es lunes');
        break
    case 2:
        console.log('hoy es martes');
        break
    case 3:
        console.log('hoy es miercoles');
        break
    case 4:
        console.log('hoy es jueves');
        break
    case 5:
        console.log('hoy es viernes');
        break
    case 6:
        console.log('hoy es savado');
        break
}