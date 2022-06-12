const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];

let i = 0;

// while(i < carros.length){
//     console.log(carros[i]);
//     i++;
// }

console.warn('while');
while(carros[i]){
    if(i=== 1){
        // break
        i++;
        continue // le dicde que siga ejecuntando la linea
        
    }
    console.log(carros[i]);
    i++;
}

// let n = 0;
// let x = 0;

// while(n<3){
//     n ++;
//     x += n;
//     console.log({n,x})
// }

// console.log({n,x})

console.warn('Do While');

let j = 0;

do{
    console.log(carros[j]);
    j++;
}while(carros[j]);