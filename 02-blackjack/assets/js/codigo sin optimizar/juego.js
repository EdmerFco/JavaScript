
    let deck         = [];
    const tipos      = ['C','D','H','S'];
    const especiales = ['A','J','Q','K'];
    
    // referencias HTML
    
    const cartaPuntos = document.querySelectorAll('small');
    const divCartaJugador = document.querySelector('#juegador-cartas');
    const divCartacamputadora = document.querySelector('#computadora-cartas');
    
    // button
    const btnPedir = document.querySelector('#btnPedir');
    const btnDetener = document.querySelector('#btnDetener');
    const btnNuevo = document.querySelector('#btnNuevo');
    
    
    
    let puntosJugador = 0, 
        puntosComputadora = 0;
    
    //  Esta funcion crea un anueva varaja con los for y for of 
    const crearDeck = () => {
        for(let i = 2; i <= 10; i++){
            for(let tipo of tipos){
                deck.push(i + tipo);
            }
        }
        for(let tipo of tipos){
            for(let eso of especiales){
                deck.push(eso + tipo);
            }
        }
        // console.log(deck); //deck ordenado 
        deck = _.shuffle(deck);
        // console.log(deck);
        return deck;
    }
    
    crearDeck();
    
    //  Esta funcion me permite tomar una carta
    const pedirCarta = () => {
        if(deck.length === 0 ){
            throw 'NO hay cartas en el deck';
        }
        // eliminar ultima carta con pop( )
        let carta = deck.pop();
        // console.log(carta);
        // console.log(deck);
        //////////////////////////////////////////////////////////////////////////////
        // Eliminar primer carta con shift()
        // let carta = deck.shift();
        // console.log(carta);
        // console.log(deck);   
    
        return carta;
    }
    
    pedirCarta();
    
    // valor de carta 
    const valorCarta = (carta) => {
        const valor = carta.substring(0, carta.length -1);
         return (isNaN(valor)) ?
           (valor === 'A') ? 11 : 10 :
           valor * 1;
    }  
    
    const valor = valorCarta(pedirCarta());
    // console.log(valor);
    
    // Turno de la computadora para jugar
    const turnoComputadora = (puntosMimos) => {
        do{
            const carta = pedirCarta();
            puntosComputadora = puntosComputadora + valorCarta( carta);
            cartaPuntos[1].innerText = puntosComputadora;
            // crear cartas en html
            const cartaHTML = document.createElement('img');
            cartaHTML.src = `assets/cartas/${carta}.png`;
            cartaHTML.classList.add('carta');
            divCartacamputadora.append(cartaHTML);
            if(puntosMimos > 21){
                break;
            }
    
        }
        while((puntosComputadora < puntosMimos) && (puntosMimos <= 21));
       
        setTimeout(() => {
            if(puntosComputadora === puntosMimos){
            alert('Empate');
        }else if (puntosMimos > 21 ){
            alert('Computadora Gana');
        }else if(puntosComputadora > 21 ){
            alert('Jugador Gana');
        }else if(puntosComputadora > puntosMimos){
            alert('computadora gana');
        }
        }, 30);
    
    };
    
    
    // Eventos pedir carta
    btnPedir.addEventListener('click', () => {
        const carta = pedirCarta();
        puntosJugador = puntosJugador + valorCarta( carta);
        cartaPuntos[0].innerText = puntosJugador;
        // crear cartas en html
        const cartaHTML = document.createElement('img');
        cartaHTML.src = `assets/cartas/${carta}.png`
        cartaHTML.classList.add('carta');
        divCartaJugador.append(cartaHTML);
    
        // Dondicon para deje de jugar si se pasa de 21 puntos 
        if(puntosJugador > 21 ){
            console.warn('perdiste');
            turnoComputadora(puntosJugador);
            btnPedir.disabled = true;
            btnDetener.disabled = true;
        }else if (puntosJugador === 21){
            console.warn('21, Genial');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
        }
    });
    
    // Evento detener juego 
    btnDetener.addEventListener('click', () => {
        btnDetener.disabled = true;
        btnPedir.disabled = true;
        turnoComputadora(puntosJugador);
    
    });
    // crear un nuevo juego 
    btnNuevo.addEventListener('click', () => {
    
        console.clear();
        deck = [];
        deck = crearDeck();
       
        puntosJugador     = 0;
        puntosComputadora = 0;
    
        cartaPuntos[0].innerText = 0;
        cartaPuntos[1].innerText = 0;
    
        divCartacamputadora.innerHTML = '0';
        divCartaJugador.innerHTML     = '0';
    
        btnPedir.disabled   = false
        btnDetener.disabled = false;
    });

