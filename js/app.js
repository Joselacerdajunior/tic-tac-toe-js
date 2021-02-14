var plays = ['', '', '', '', '', '', '', '', ''];
var count = '1';
var countPlays = '1';
var url_image = ['url(./images/x-orange.png)', 'url(./images/o-blue.png)']
var system = '1';
var position = 0;
var player1 = 0;
var player2 = 0;

var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var box4 = document.getElementById("box4");
var box5 = document.getElementById("box5");
var box6 = document.getElementById("box6");
var box7 = document.getElementById("box7");
var box8 = document.getElementById("box8");
var box9 = document.getElementById("box9");
var element_player1 = document.getElementById("text-player1");
var element_player2 = document.getElementById("text-player2");

    
const verif = () => {
    console.log(plays);
    if ((plays[0] == countPlays && plays[1] == countPlays && plays[2] == countPlays) || 
        (plays[3] == countPlays && plays[4] == countPlays && plays[5] == countPlays) || 
        (plays[6] == countPlays && plays[7] == countPlays && plays[8] == countPlays) || 
        (plays[0] == countPlays && plays[3] == countPlays && plays[6] == countPlays) || 
        (plays[1] == countPlays && plays[4] == countPlays && plays[7] == countPlays) || 
        (plays[2] == countPlays && plays[5] == countPlays && plays[8] == countPlays) || 
        (plays[0] == countPlays && plays[4] == countPlays && plays[8] == countPlays) || 
        (plays[2] == countPlays && plays[4] == countPlays && plays[6] == countPlays)) {
            
        system = '0';
        console.log(system);
        console.log("Temos um vencedor!!");
        plusVictory();
        setTimeout(() => {            
            alert("Temos um vencedor!! Pressione OK para reiniciar a partida.");
            restartVarGame();
        }, 200);
    }else 
    if ((plays[0] != '') && (plays[1] != '') && (plays[2] != '') && 
        (plays[3] != '') && (plays[4] != '') && (plays[5] != '') && 
        (plays[6] != '') && (plays[7] != '') && (plays[8] != '')) {

        system = '0';
        console.log(system);
        console.log("Velha!!");  
        setTimeout(() => {            
            alert("Deu velha!! Ninguem ganhou. Pressione OK para reiniciar a partida.");
            restartVarGame();
        }, 200);
    }
}
    
const printInBoard = () => {    
    box1.addEventListener('click', () => {        

        if (system == '1') {
            position = 0;
            analyze();            
        }
    });

    box2.addEventListener('click', () => {        
        
        if (system == '1') {
            position = 1;
            analyze();  
        }
    });

    box3.addEventListener('click', () => {        
       
        if (system == '1') { 
            position = 2;
            analyze();  
        }
    });

    box4.addEventListener('click', () => {        
     
        if (system == '1') {  
            position = 3;
            analyze();  
        }
    });

    box5.addEventListener('click', () => {        
      
        if (system == '1') { 
            position = 4;
            analyze();  
        }
    });

    box6.addEventListener('click', () => {        
        
        if (system == '1') {
            position = 5;
            analyze();  
        }
    });

    box7.addEventListener('click', () => {        
      
        if (system == '1') {  
            position = 6;
            analyze();  
        }
    });

    box8.addEventListener('click', () => {        
      
        if (system == '1') {
            position = 7;
            analyze();  
        }
    });

    box9.addEventListener('click', () => {        
      
        if (system == '1') { 
            position = 8;
            analyze();  
        }
    });
};

const reversePlayer = () => {
    if( count == '1') {
        count = '0';
    } else {
        count = '1';
    }
}

const set_box = () => {
    switch (position) {
        case 0: box1.style.backgroundImage =  url_image[countPlays]; break;
        case 1: box2.style.backgroundImage =  url_image[countPlays]; break;
        case 2: box3.style.backgroundImage =  url_image[countPlays]; break;
        case 3: box4.style.backgroundImage =  url_image[countPlays]; break;
        case 4: box5.style.backgroundImage =  url_image[countPlays]; break;
        case 5: box6.style.backgroundImage =  url_image[countPlays]; break;
        case 6: box7.style.backgroundImage =  url_image[countPlays]; break;
        case 7: box8.style.backgroundImage =  url_image[countPlays]; break;
        case 8: box9.style.backgroundImage =  url_image[countPlays]; break;
    }
}

const restartVarGame = () => {
    plays = ['', '', '', '', '', '', '', '', ''];
    count = '1';
    countPlays = '1';
    system = '1';
    position = 0;
    
    cleanBoard();
}

const cleanBoard = () => {
    box1.style.backgroundImage =  null;
    box2.style.backgroundImage =  null;
    box3.style.backgroundImage =  null;
    box4.style.backgroundImage =  null;
    box5.style.backgroundImage =  null;
    box6.style.backgroundImage =  null;
    box7.style.backgroundImage =  null;
    box8.style.backgroundImage =  null;
    box9.style.backgroundImage =  null;    
}

const analyze = () => {
    if( plays[position] == '' ) {  
        countPlays = count;          
        set_box();
        
        plays[position] = countPlays;
        reversePlayer();
        verif();
    }
}

const plusVictory = () => {
    if (countPlays == 1) {
        player1++;
    } else {
        player2++;
    }
    changeH2Value();
    console.log(player1 + " " + player2);
}

const changeH2Value = () => {
    element_player1.innerHTML = player1;
    element_player2.innerHTML = player2;
}

printInBoard();
