const heroes =  ['Batman', 'Superman', 'Flash', 'Aquaman'];

console.warn('For');
for(let i = 0; i < heroes.length; i++){
    console.log(heroes[i]);
}

console.warn('For IN');
for(let i in heroes){
    console.log(heroes[i]);

}

console.warn('For OF')
for(let heroe of heroes){
    console.log(heroe);
}