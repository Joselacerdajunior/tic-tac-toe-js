var jogadas = ['', '', '', '', '', '', '', '', ''];
var cont_jogada = '1';
var url_image = ['url(/images/x-orange.png)', 'url(/images/o-blue.png)']
var system = '1';
    
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
            if( jogadas[0] == '' ) {            
                box1.style.backgroundImage =  url_image[cont_jogada];
                jogadas[0] = cont_jogada;
                verif();
                if( cont_jogada == '1') {
                    cont_jogada = '0';
                } else {
                    cont_jogada = '1';
                }
            }
        }
    });

    box2.addEventListener('click', () => {        
        
        if (system == '1') {
            if( jogadas[1] == '' ) {
                box2.style.backgroundImage =  url_image[cont_jogada];
                jogadas[1] = cont_jogada;
                verif();
                if( cont_jogada == '1') {
                    cont_jogada = '0';
                } else {
                    cont_jogada = '1';
                }
            }
        }
    });

    box3.addEventListener('click', () => {        
       
        if (system == '1') { 
            if( jogadas[2] == '' ) {
                box3.style.backgroundImage =  url_image[cont_jogada];
                jogadas[2] = cont_jogada;
                verif();
                if( cont_jogada == '1') {
                    cont_jogada = '0';
                } else {
                    cont_jogada = '1';
                }
            }
        }
    });

    box4.addEventListener('click', () => {        
     
        if (system == '1') {   
            if( jogadas[3] == '' ) {
                box4.style.backgroundImage =  url_image[cont_jogada];
                jogadas[3] = cont_jogada;
                verif();
                if( cont_jogada == '1') {
                    cont_jogada = '0';
                } else {
                    cont_jogada = '1';
                }
            }
        }
    });

    box5.addEventListener('click', () => {        
      
        if (system == '1') {  
            if( jogadas[4] == '' ) {
                box5.style.backgroundImage =  url_image[cont_jogada];
                jogadas[4] = cont_jogada;
                verif();
                if( cont_jogada == '1') {
                    cont_jogada = '0';
                } else {
                    cont_jogada = '1';
                }
            }
        }
    });

    box6.addEventListener('click', () => {        
        
        if (system == '1') {
            if( jogadas[5] == '' ) {
                box6.style.backgroundImage =  url_image[cont_jogada];
                jogadas[5] = cont_jogada;
                verif();
                if( cont_jogada == '1') {
                    cont_jogada = '0';
                } else {
                    cont_jogada = '1';
                }
            }
        }
    });

    box7.addEventListener('click', () => {        
      
        if (system == '1') {  
            if( jogadas[6] == '' ) {
                box7.style.backgroundImage =  url_image[cont_jogada];
                jogadas[6] = cont_jogada;
                verif();
                if( cont_jogada == '1') {
                    cont_jogada = '0';
                } else {
                    cont_jogada = '1';
                }
            }
        }
    });

    box8.addEventListener('click', () => {        
      
        if (system == '1') {  
            if( jogadas[7] == '' ) {
                box8.style.backgroundImage =  url_image[cont_jogada];
                jogadas[7] = cont_jogada;
                verif();
                if( cont_jogada == '1') {
                    cont_jogada = '0';
                } else {
                    cont_jogada = '1';
                }
            }
        }
    });

    box9.addEventListener('click', () => {        
      
        if (system == '1') {  
            if( jogadas[8] == '' ) {
                box9.style.backgroundImage =  url_image[cont_jogada];
                jogadas[8] = cont_jogada;
                verif();
                if( cont_jogada == '1') {
                    cont_jogada = '0';
                } else {
                    cont_jogada = '1';
                }
            }
        }
    });
};
print_in();

