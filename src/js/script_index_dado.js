
// DECLARANDO VARIAVEIS     // DECLARANDO VARIAVEIS     //DECLARANDO VARIAVEIS      //DECLARANDO VARIAVEIS

const botao_dado= document.getElementById("botao_dado");
var resposta = document.querySelector('.resposta');


var lugar = 1;
var momento = " ";

var lutar = 0;
var vez_luta = 0;
var perso = 0;
var vidaInimigo = 35;
var forcaInimigo = "?";

var vida = 0;
var sanidade = 0;
const agilidade = 5;
const forca = 5;
const furtividade = 2;
const furto = 2;
const percepcao = 3;
const forcaVontade = 3;
/*"const agilidade = document.getElementById('');
const forca = document.getElementById('');
const furtividade = document.getElementById('');
const furto = document.getElementById('');
const percepcao = document.getElementById('');
const forcaVontade = document.getElementById('');"*/

// DADO     // DADO     //DADO      //DADO      //DADO      //DADO


botao_dado.addEventListener("click", function(){

    if (lutar == 1) { //LUTA
        vez_luta++;

        if (momento == "falsa salvadora"){
            vidaInimigo = 70;
            forcaInimigo = "?";/////////////////////////////////////////////////////////////////////
        }
        if (vez_luta == 1) { //SUA VEZ NA LUTA
            var rand = Math.floor(Math.random() * 10 );// isso porque o numero posto nâo pode ser sorteado
            var suaForca = forca + rand +1;
            
            if (suaForca>10) {
                suaForca = 10;

            }

            vidaInimigo = vidaInimigo - suaForca;

            ///////////////////////////////////////////FAZER O GANHO E A LUTA DO INIMIGO

        }
        
        

    }
    if (lutar == -1) { //tentando fugir da luta

        var rand = Math.floor(Math.random() * 10 );// isso porque o numero posto nâo pode ser sorteado
        rand++;
        

    }

    if(perso == 1){ //TUDO HAVER COM CALCULO DAS PERSONALIDADES

        var v = 1;
        while (v <= 6) {

            var rand = Math.floor(Math.random() * 10 );// isso porque o numero posto nâo pode ser sorteado
            rand++;
            if(v==1){

            }

        }
    }





    else{ 
        var rand = Math.floor(Math.random() * 20 );// isso porque o numero posto nâo pode ser sorteado

        resposta.innerHTML = rand+1;




    
    }

});


