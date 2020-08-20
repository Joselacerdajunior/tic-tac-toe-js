var jogadas = ['', '', '', '', '', '', '', '', ''];
var cont = '1';
var cont_jogada = '1';
var url_image = ['url(/images/x-orange.png)', 'url(/images/o-blue.png)']
var system = '1';
var posicao = 0;
    
const verif = () => {
    console.log(jogadas);
    if ((jogadas[0] == cont_jogada && jogadas[1] == cont_jogada && jogadas[2] == cont_jogada) || 
        (jogadas[3] == cont_jogada && jogadas[4] == cont_jogada && jogadas[5] == cont_jogada) || 
        (jogadas[6] == cont_jogada && jogadas[7] == cont_jogada && jogadas[8] == cont_jogada) || 
        (jogadas[0] == cont_jogada && jogadas[3] == cont_jogada && jogadas[6] == cont_jogada) || 
        (jogadas[1] == cont_jogada && jogadas[4] == cont_jogada && jogadas[7] == cont_jogada) || 
        (jogadas[2] == cont_jogada && jogadas[5] == cont_jogada && jogadas[8] == cont_jogada) || 
        (jogadas[0] == cont_jogada && jogadas[4] == cont_jogada && jogadas[8] == cont_jogada) || 
        (jogadas[2] == cont_jogada && jogadas[4] == cont_jogada && jogadas[6] == cont_jogada)) {
            
        system = '0';
        console.log(system);
        console.log("Temos um vencedor!!");
        alert("Temos um vencedor!! Pressione OK para reiniciar a partida.");
        document.location.reload();
    }else 
    if ((jogadas[0] != '') && (jogadas[1] != '') && (jogadas[2] != '') && 
        (jogadas[3] != '') && (jogadas[4] != '') && (jogadas[5] != '') && 
        (jogadas[6] != '') && (jogadas[7] != '') && (jogadas[8] != '')) {

        system = '0';
        console.log(system);
        console.log("Velha!!");
        alert("Deu velha!! Ninguem ganhou. Pressione OK para reiniciar a partida.");
        document.location.reload();
    }
}
    
const print_in = () => {    

    var box1 = document.getElementById("box1");
    var box2 = document.getElementById("box2");
    var box3 = document.getElementById("box3");
    var box4 = document.getElementById("box4");
    var box5 = document.getElementById("box5");
    var box6 = document.getElementById("box6");
    var box7 = document.getElementById("box7");
    var box8 = document.getElementById("box8");
    var box9 = document.getElementById("box9");


    box1.addEventListener('click', () => {        

        if (system == '1') {
            posicao = 0;
            analizar();            
        }
    });

    box2.addEventListener('click', () => {        
        
        if (system == '1') {
            posicao = 1;
            analizar();  
        }
    });

    box3.addEventListener('click', () => {        
       
        if (system == '1') { 
            posicao = 2;
            analizar();  
        }
    });

    box4.addEventListener('click', () => {        
     
        if (system == '1') {  
            posicao = 3;
            analizar();  
        }
    });

    box5.addEventListener('click', () => {        
      
        if (system == '1') { 
            posicao = 4;
            analizar();  
        }
    });

    box6.addEventListener('click', () => {        
        
        if (system == '1') {
            posicao = 5;
            analizar();  
        }
    });

    box7.addEventListener('click', () => {        
      
        if (system == '1') {  
            posicao = 6;
            analizar();  
        }
    });

    box8.addEventListener('click', () => {        
      
        if (system == '1') {
            posicao = 7;
            analizar();  
        }
    });

    box9.addEventListener('click', () => {        
      
        if (system == '1') { 
            posicao = 8;
            analizar();  
        }
    });
};
print_in();

const inverte_jogador = () => {
    if( cont == '1') {
        cont = '0';
    } else {
        cont = '1';
    }
}

const set_box = () => {
    switch (posicao) {
        case 0: box1.style.backgroundImage =  url_image[cont_jogada]; break;
        case 1: box2.style.backgroundImage =  url_image[cont_jogada]; break;
        case 2: box3.style.backgroundImage =  url_image[cont_jogada]; break;
        case 3: box4.style.backgroundImage =  url_image[cont_jogada]; break;
        case 4: box5.style.backgroundImage =  url_image[cont_jogada]; break;
        case 5: box6.style.backgroundImage =  url_image[cont_jogada]; break;
        case 6: box7.style.backgroundImage =  url_image[cont_jogada]; break;
        case 7: box8.style.backgroundImage =  url_image[cont_jogada]; break;
        case 8: box9.style.backgroundImage =  url_image[cont_jogada]; break;
    }
}

const analizar = () => {
    if( jogadas[posicao] == '' ) {  
        cont_jogada = cont;          
        set_box();
        jogadas[posicao] = cont_jogada;
        inverte_jogador();
        verif();
    }
}