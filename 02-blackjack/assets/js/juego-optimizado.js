const miModulo = (() => {
    let deck         = [];
    const tipos      = ['C','D','H','S'],
          especiales = ['A','J','Q','K'];
    
    let puntosJugadores = [];
    
    // referencias HTML
    const btnPedir = document.querySelector('#btnPedir'),
          btnDetener = document.querySelector('#btnDetener'),
          btnNuevo = document.querySelector('#btnNuevo');
    

    const divCartasJugadores = document.querySelectorAll('.divCartas'),
          cartaPuntos = document.querySelectorAll('small');
    
    // funcion para inicializar juego 
    const inicio = (numJugadores = 2 ) => {
        puntosJugadores = [];
        deck = crearDeck();
        for(let i = 0; i<numJugadores; i++){
            puntosJugadores.push(0);
        }

        cartaPuntos.forEach(elem => elem.innerText = 0)
        divCartasJugadores.forEach(elem => elem.innerText = '');
    
    
        btnPedir.disabled   = false
        btnDetener.disabled = false;
        
    }
    
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
        // deck = _.shuffle(deck);
        // console.log(deck);
        return _.shuffle(deck);
    }
    
    
    //  Esta funcion me permite tomar una carta
    const pedirCarta = () => {
        if(deck.length === 0 ){
            throw 'NO hay cartas en el deck';
        }  
    
        return deck.pop();
    }
    
    // pedirCarta(); Error 
    
    // valor de carta 
    const valorCarta = (carta) => {
        const valor = carta.substring(0, carta.length -1);
         return (isNaN(valor)) ?
           (valor === 'A') ? 11 : 10 :
           valor * 1;
    }  
    
    // const valor = valorCarta(pedirCarta()); pate del error 
    // console.log(valor);

    // Tunrno: 0 = primer jugador y el ultimo sera la computadora
    const acumularPuntos = (carta, turno) => {
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta( carta );
        cartaPuntos[turno].innerText = puntosJugadores[turno];
        return puntosJugadores[turno];

    }

    // Turno de la computadora para jugar
    const crearcarta = (carta, turno) => {
        //  crear cartas en html
         const cartaHTML = document.createElement('img');
         cartaHTML.src = `assets/cartas/${carta}.png`;
         cartaHTML.classList.add('carta');
         divCartasJugadores[turno].append(cartaHTML);
    }

    const deteminarGanador = () => {

        const [puntosMimos, puntosComputadora] = puntosJugadores;

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
        }, 100);
    }

    const turnoComputadora = (puntosMimos) => {
        let puntosComputadora = 0;
        do{
            const carta = pedirCarta();
            puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1);
            crearcarta(carta, puntosJugadores.length - 1);
    
        }
        while((puntosComputadora < puntosMimos) && (puntosMimos <= 21));
       
        deteminarGanador(); 
    
    };
    
    
    // Eventos pedir carta
    btnPedir.addEventListener('click', () => {
        const carta = pedirCarta();
        

        const puntosJugador = acumularPuntos(carta, 0);

        crearcarta(carta, 0);
        // crear cartas en html
        
    
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
            turnoComputadora(puntosJugadores[0]);
        }
    });
    
    // Evento detener juego 
    btnDetener.addEventListener('click', () => {
        btnDetener.disabled = true;
        btnPedir.disabled = true;
        turnoComputadora(puntosJugadores[0]);
    
    });
    // crear un nuevo juego 
    btnNuevo.addEventListener('click', () => {
        inicio();
    });

    return {
        nuevoJuego:  inicio
    };
})();
