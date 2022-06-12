const regresaTrue = () => {
    console.log('Regresa un True');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa un False');
    return false;
}

console.warn('Not o la Negacion');
 console.log(!true);
 console.log(!false)

 console.log(!regresaTrue())

 console.log(!regresaFalse());

 console.warn('And');

 console.log(true && true);
 console.log(true && false);
 console.log("=================================")

 console.log(regresaFalse() && regresaTrue());
 console.log(regresaTrue() && regresaFalse());

 console.log("=============&&==================")

 regresaFalse() && regresaTrue();
regresaTrue() && regresaFalse();

console.log('4  Condiciones', true && true && true &&  false);

console.log("=============OR==================")

console.log( true || false);
console.log( false || false);


console.log(regresaFalse()|| regresaTrue());
console.log(regresaTrue() || regresaFalse());

console.log('4  Condiciones', true || true || true || false);



// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.warn('Pro tip');
console.log( 'Asiganacion')

const soyUndefined = undefined;
const soyUndeNull = null;
const soyFlase = false;

const a1 = soyUndeNull && 'Hola Mundd' && 150;
const a2 = 'hola' && 'mundo';
const a3 = soyFlase || 'Ya no soy falso';
const a4 = soyFlase || soyUndeNull|| soyUndeNull || 'ya no soy falso';
const a5 = soyFlase || soyUndeNull|| soyUndeNull || 'ya no soy falsode nuevo' || true;

console.log({a1, a2, a3,a4, a5});
