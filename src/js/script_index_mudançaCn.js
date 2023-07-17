// DECLARANDO VARIAVEIS DAS LUTAS  // DECLARANDO VARIAVEIS DAS LUTAS  // DECLARANDO VARIAVEIS DAS LUTAS

var lutar = 0;
var vez_luta = 1;
var perso = 0;
var vidaInimigo = 25;
var forcaInimigo = 0;





// DECLARANDO VARIAVEIS DO DADO // DECLARANDO VARIAVEIS DO DADO  // DECLARANDO VARIAVEIS DO DADO

const resposta = document.getElementById('resposta');
const botao_dado= document.getElementById("botao_dado");

var textDado = 0;
var click = 0;

var vida = 35;
var sanidade = 0;
const agilidade = 5;
const forca = 5;
const furtividade = 2;
const furto = 2;
const percepcao = 3;
const forcaVontade = 3;



// DECLARANDO VARIAVEIS DOS CENARIOS // DECLARANDO VARIAVEIS DOS CENARIOS // DECLARANDO VARIAVEIS DOS CENARIOS

var lugar = 1;
var momento = " ";
var apartir = 0;
var vezes = 0;

var cenarioFundo = document.querySelector(".cenarioFundo");

const select_1Id = document.getElementById('select_1');
const select_2Id = document.getElementById('select_2');
const select_3Id = document.getElementById('select_3');
const select_4Id = document.getElementById('select_4');
const select_5Id = document.getElementById('select_5');
const select_6Id = document.getElementById('select_6');
const select_7Id = document.getElementById('select_7');
const select_8Id = document.getElementById('select_8');

const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
const p3 = document.getElementById('p3');

var select_2_1 = document.querySelector('#select_2_1');
var select_3_1 = document.querySelector('#select_3_1');
var select_4_1 = document.querySelector('#select_4_1');

//FACILITANDO MINHA VIDA



// JOGANDO     // JOGANDO     //JOGANDO      //JOGANDO      //JOGANDO      //JOGANDO  



select_1Id.addEventListener("click", function(){

    if (lugar <= 10 && lugar>=0 ) { //Esta no bunker
        
        if(lugar == 1){ // vai para a escada

            cenarioFundo.setAttribute("src","src/img/cenario/cn_escada.jpg");
            lugar++;

            select_2Id.innerHTML = ".voltar";
            select_2Id.style.cursor = "pointer";
            select_1Id.style.cursor = "pointer";

            if (momento == " "){
                momento = "em busca de suprimentos";
            }
            
        }
        else if(lugar == 2){ // vai para a rua
            cenarioFundo.setAttribute("src","src/img/cenario/cn_rua.jpg")
            lugar++; // lugar == 3 === estou no cenario da rua

            if(momento == "em busca de suprimentos" && vezes == 0){
                
                vezes++;

                p1.innerHTML = " \n        Os minutos pareciam horas enquanto \n"+
            "   o grupo se apressava pelas ruas vazias. \n"+
            "   O anoitecer caía rapidamente, \n"+
            "   engolindo tudo em sua escuridão mortal. \n"+
            "   O desespero começava a se infiltrar \n"+
            "   nas mentes dos heróis, quando...\n"+
            "____________________________________\n\n";

            p2.innerHTML = " ";

            p3.innerHTML = " ";

            }

        }
        else if (lugar == 3){// vai para a casa velha
            cenarioFundo.setAttribute("src","src/img/cenario/cn_casaVelha.jpg")
            lugar++; // lugar == 3 === estou na casa velha

            select_1Id.innerHTML = ".Se aproximar";

            if(momento == "em busca de suprimentos" && vezes == 1){ // se passou pelo outro so pode ser 1
            
                vezes++; // so pode ser 2
                p2.innerHTML = "\n      De repente, avistaram uma casa\n"+
                "   humilde ao longe. seu grupo via\n "+
                "   a pequena casa como esperança\n"+
                "   e oportunidade, porem Carmem\n"+
                "   (a mais medrosa do grupo) receava\n"+
                "   a casa\n"+
                "____________________________________\n\n";
            }
            else if  (momento == "mapa" && apartir >= 4){

                select_3Id.innerHTML = ".Seguir mapa";

            }
        }
        else if (lugar == 4){ //porta
            cenarioFundo.setAttribute("src","src/img/cenario/cn_porta.jpg")
            lugar++; // lugar == 5 === estou na porta da casa velha

            if( vezes == 2 ){ // se passou pelo cenario so uma vez entao vezes == 1
                
                if (momento == "em busca de suprimentos") {

                    select_1Id.display = "none";
                    momento = "Abrir porta da casa assombrada";
                    botao_dado.style.cursor = "pointer";
                }
                
                select_1Id.innerHTML = ".Abrir";
            }
            else{

                select_1Id.innerHTML = ".Entrar";

            }
            }

        }
        if(lugar == 5){

            if( vezes == 2 && momento == "Abrir porta da casa assombrada"){ // tentou abrir a porta entao vezes == 2
                                        
                select_1Id.innerHTML = ".Porfavor gire o dado";
                select_1Id.style.cursor = "none";
                select_2Id.innerHTML = ".";
                select_2Id.style.cursor = "none";
                
            }
            else if(vezes>=3){

                select_1Id.innerHTML = ".Abrir";
                dentroCasaAssombrada();
                select_1Id.style.cursor = "pointer";

            }

    }
})
select_2Id.addEventListener("click", function (){
    
    if (lugar <= 10 && lugar>=0 ) { //voltar
        
        voltar()
        }


});

select_3Id.addEventListener("click", function(){


    igreja();
    

});




function igreja() {
    
    if(lugar == 3){

        cenarioFundo.setAttribute("src","src/img/cenario/cn_floresta_neblina.jpg");
        lugar = 8;


        if(momento == "Dentro da Casa Mal Assombrada" && vezes==4){

            momento = "A caminho da igreja"
            vezes = 5;

            p1.innerHTML = "    No meio da fuga, correndo para longe\n"+
                "da casa atormentada, os nossos 5\n"+
                "jovens adentram em uma floresta\n"+
                "com uma densa neblina que começou\n"+
                "a se formar.\n\n "
                "   Sons assustadores ecoavam ao redor\n"+
                "deles, enquanto sombras pareciam\n"+
                "se mover rapidamente nas\n"+
                "bordas de seu campo de visão.\n "+
                "____________________________________"

//(Jogadores teram que jogar dados para ou ganhar algo para ajudar ou sei la quebrar uma perna; 
                                 
            p2.innerHTML = "    Marcelo notou um brilho fraco por\n"+
                "traz de uma grande arvore e contou\n"+
                "aos seus amigos. Curiosos e\n"+
                "desesperados por um lugar seguro\n"+
                "os jovens se perguntavam se deveriam\n "
                "seguir a brilhante luz.\n"+
                "____________________________________\n\n"

            p3.innerHTML = "    O QUE VOCÊ VAI FAZER?"

            select_1Id.innerHTML = "."
            select_3Id.innerHTML = ".Seguir a luz"


        }else if (vezes >= 6){

            /*normal*/
            

        }




    }
    else if (lugar == 4 && apartir >= 4){

        cenarioFundo.setAttribute("src","src/img/cenario/cn_laboratorio_caminho.jpg");

        select_1Id.innerHTML = ".Seguir";
        select_2Id.innerHTML = ".voltar";
        select_3Id.innerHTML = ".";

    }


    else if (lugar == 8){

        cenarioFundo.setAttribute("src","src/img/cenario/cn_igreja_dentro.jpg");
        lugar++;

        if(momento == "A caminho da igreja" && vezes==5){

            vezes = 7;

            p1.innerHTML = "    O grupo adentrou a igreja\n\n\n"+
                "   À medida que exploravam o local\n"+
                "sagrado, os jogadores encontraram\n"+
                "um altar central, coberto por um manto\n"+
                "desgastado. Intrigados, eles levantaram\n "
                "o tecido e descobriram um símbolo\n"+
                "estranho esculpido na pedra.\n\n"+
                "____________________________________\n\n"

//(Jogadores teram que jogar dados para ou ganhar algo para ajudar ou sei la quebrar uma perna; 
                                      
            p2.innerHTML = "    Era uma representação de um olho\n"+
                "com múltiplas pupilas, irradiando\n"+
                "uma aura sinistra.\n"+
                "____________________________________\n\n"

                   
            p3.innerHTML = "    Enquanto observavam o símbolo,\n"+
                "uma voz sussurrou em suas mentes,\n"+
                "ecoando em um tom distorcido, como\n"+
                "se mil vozes falassem ao mesmo tempo.\n\n"+
                "'A escuridão está além do que vocês'\n "+
                "'podem imaginar, lutar é inútil...'\n\n"+

                "   Os jogadores sentiram calafrios\n"+
                "percorrerem suas espinhas e uma\n"+
                "sensação de desespero os envolveu.\n"

            select_1Id.innerHTML = ".";
            select_3Id.innerHTML = ".procurar";
            select_2Id.style.display = "none";

            //(Teste de sanidade)  

        }
    }
    else if (vezes == 7){
                  vezes =8;
        p1.innerHTML = "    Decididos a desvendar o\n\n\n"+
                "enigma e encontrar uma maneira de\n"+
                "combater as criaturas, os jogadores\n"+
                "exploraram mais profundamente a igreja.\n\n"+
                "____________________________________\n\n"

        p2.innerHTML = "    Era uma representação de um olho\n"+
                "com múltiplas pupilas, irradiando\n"+
                "uma aura sinistra.\n"+
                "____________________________________\n\n"

                p3.innerHTML = "";
        select_3Id.innerHTML = ".procurar";

    }

    else if (vezes == 8){
        vezes =9;
        p1.innerHTML = " "

        p2.innerHTML = " "

        select_2Id.innerHTML = ".voltar";
        select_2Id.style.display ="block"
    }
    else if (vezes == 9){

        cenarioFundo.setAttribute("src","src/img/cenario/cn_antigo_bunker.jpg");
        lugar++;

        select_2Id.innerHTML = ".voltar";
        select_3Id.innerHTML = ". ";

        dadoT();


    }
    





}
















select_4Id.addEventListener("click", function(){ //haker para pular as lutas
    
    if(lutar == 1){
        apartir = 3;
        select_7Id.style.display= "block";
        select_7Id.style.opacity= 10;
        select_7Id.innerHTML = ".haker para lutas"

    }
 
});

select_5Id.addEventListener("click", function(){ //lutar

    lutar = 1;
    select_5Id.innerHTML= "gire o dado";
    select_6Id.style.display = "none";


});

select_6Id.addEventListener("click", function(){ //fugir


    Fuga();
    
        

});

select_7Id.addEventListener("click", function(){ //fugir



    select_4Id.innerHTML = "VOCÊ VENCEU ";
    lutar = 0;
    select_8Id.style.opacity = 0;

    select_2Id.innerHTML=".voltar"


});





















// DADO     // DADO     //DADO      //DADO      //DADO      //DADO      //DADO      //DADO      //DADO


/*"const agilidade = document.getElementById('');
const forca = document.getElementById('');
const furtividade = document.getElementById('');
const furto = document.getElementById('');
const percepcao = document.getElementById('');
const forcaVontade = document.getElementById('');"*/



/*const resposta = document.getElementById('resposta');

var vida = 0;
var sanidade = 0;
const agilidade = 5;
const forca = 5;
const furtividade = 2;
const furto = 2;
const percepcao = 3;
const forcaVontade = 3; */


botao_dado.addEventListener("click", function(){

    textDado++;

    p1.innerHTML = " ";

    if(lugar == 5 && momento == "Abrir porta da casa assombrada"){
        abrirPortaAssombrada();  
        apartir = 2;
    }
    else if(lutar == 1){

        lutaDado();
        apartir++;

    }

});




























function dadoT(){

    if (momento == "A caminho da igreja" && lugar == 10) {

        var rand = Math.floor(Math.random() * 10 );

        rand = rand+ percepcao;

        rand = 9; ///////////////////////////////////////////////////////LEMBRE DE MUDAR DEPOIS

        if( rand >= 8){

                   
            p1.innerHTML = "    Entre os objetos\n\n\n"+
                "empoeirados, um pergaminho antigo\n"+
                "chamou a atenção deles. Com cuidado,\n"+
                "desenrolaram o pergaminho, revelando\n"+
                "um mapa intricado com marcações\n"+
                "misteriosas. Era um guia para um\n"+
                "local esquecido.\n"+
                "____________________________________\n\n"

            p2.innerHTML = "    A marcação no mapa falava de\n"+
                "um local perto da casa cheia de\n"+
                "duplicatas.\n"+
                
                "____________________________________\n\n"

            p3.innerHTML = "va na casa das duplicatas\n";

            momento = "Mapa"
            apartir= 4;//1

        }
        else{

            p2.innerHTML = "    O grupo, apressar de tentar,\n"+
                "não acha nada de importância.\n"+
                "____________________________________\n\n"

                select_3Id.innerHTML= "."

                momento = "Outro seguimento"
                apartir+2;//2
        }
    }




}





function dentroCasaAssombrada() {

    select_7Id.style.display= "none";
    textDado = -3;  
    click = 0;

    
        cenarioFundo.setAttribute("src","src/img/cenario/casa_abandonadaDentro.jpg");
        
        p1.innerHTML="\n  O cheiro de mofo e abandono\n"+
        "preenchiao ar enquanto adentravam a\n"+
        "residência.\n\n"+
        "  Por um momento, a sensação de\n"+
        "alívio os invadiu, acreditando terem\n"+
        "encontrado um abrigo seguro. Porém,\n"+
        "perceberam, que as duplicatas\n"+
        "estavam por toda parte, em\n"+
        "diferentes estágios de deformidade.\n\n"+
        "  Alguns tinham braços estendidos\n"+
        "desproporcionalmente, enquanto outros\n"+
        "exibiam rostos grotescamente distorcidos.\n\n"
        "__________________________\n\n"
        p2.innerHTML= "\n\nA visão era aterrorizante,\n"+
         "mas não havia tempo para hesitar..."

        p3.innerHTML=" ";

        lugar=6;
        momento = "Dentro da Casa Mal Assombrada"

        vezes++ // vezes = 2
        select_1Id.innerHTML =".    ";
        select_2Id.innerHTML =".";
        select_3Id.innerHTML =".";
        select_4Id.innerHTML =".";

        select_5Id.innerHTML=".lutar";
        select_6Id.innerHTML=".Fugir";
        select_5Id.style.opacity = 10;
        select_6Id.style.opacity = 10;
        select_5Id.style.cursor = "pointer"
        select_6Id.style.cursor = "pointer"
        select_1Id.style.cursor = "pointer";
        select_2Id.style.cursor = "pointer";




    
    



}



function abrirPortaAssombrada() {
    
    click++;
    vezes = 3;
        botao_dado.style.cursor = "none";

        var rand = Math.floor(Math.random() * 10 );// isso porque o numero posto nâo pode ser sorteado
        rand++;
        
        resposta.innerHTML = rand;

        rand = rand + furtividade;

        if (textDado < 0) {
            
            select_1Id.innerHTML= ".Faça o favor de clicar aqui!! "

            textDado = -3;

            if(click == 3){

                select_2Id.innerHTML= ".A... piedade pai!! "
                

            }
            else if(click == 4){
                select_1Id.style.color = "red"
                select_2Id.innerHTML= ".Eu so vo avizar uma vez "
                select_3Id.innerHTML= ".ou você clica na primeira opção "
                select_4Id.innerHTML= ".ou eu te MATO!"

            }
            else if(click == 6){
                cenarioFundo.setAttribute("src","src/img/cenario/GAMER OVER.png");
             //não acontece nada mesmo que clique nas coisas

                momento = "morreu";
                select_2Id.innerHTML = "."
                select_1Id.innerHTML = ".EU AVISEI! "
                select_2Id.style.cursor = "none";
                select_1Id.style.cursor = "none";
                select_3Id.innerHTML = ".";
                select_4Id.innerHTML = ".";

                p1.innerHTML= "         morreu por que quis desafiar\n"+
                "     O jogo. \n"+
                "     'la la la la la' "
                p2.innerHTML = "";
                p3.innerHTML = "";
            }

        }

        else if(rand > 8 ){ 
            
            if ( textDado <=2){
                p3.innerHTML = " \n     Com sua incrivel furtividade você\n"+
                "   usou tecnicas exepcionais e surpreendeu\n"+
                "   as pessoas a sua volta abrindo\n"+
                "   facilmente a porta. \n\n"+
                "   Sem um unico barulho você e seus 4\n"+
                "   acompanhantes entraram na casa."

                select_1Id.innerHTML =".seguir";
                
                
            }
            else{
                p3.innerHTML = " \n     Depois de varias tentativas\n"+
                "   você finalmente logro exito e abriu\n"+
                "   a porta causando uma quantidade\n"+
                "   rasoavel de barulho. \n\n"+
                "   Você e seus 4 acompanhantes \n"+
                "   entraram na casa."

                select_1Id.innerHTML =".seguir";
            }

        }
        else if( rand>=5){
            if(textDado <=2){
                p3.innerHTML = " \n    Você conseguiu abrir rapidamente\n"+
                    "   a porta apesar de ter causado uma\n"+
                    "   quantidade rasoavel de barulho.\n"+
                    "    \n\n"+
                    "   Você e seus 4 acompanhantes \n"+
                    "   entraram na casa."

                    
                    select_1Id.innerHTML =".seguir";
            }
            else{
                p3.innerHTML = " \n     Depois de varias tentativas\n"+
                "   você finalmente logro exito e abriu\n"+
                "   a porta fazendo barulho.\n"+
                "    \n\n"+
                "   Você e seus 4 acompanhantes \n"+
                "   entraram na casa."

                select_1Id.innerHTML =".seguir";

            }
        }
        else if(rand<5){
            if(textDado == 4){      //MORREUUUUUUU
                p3.innerHTML = " \n    A situação foi dificiu e a\n"+
                    "   ansiedade martelava nos corações\n"+
                    "   do grupo, a cada segundo que\n"+
                    "   passava a respiração ficava mais\n"+
                    "   pessada.\n\n"
                    "   A porta abriu com um estrondo \n"+
                    "   e a primeira coisa que viram foi"+
                    "   uma mulher identica a uma de suas\n"+
                    "   A companhantes. \n"

                    select_1Id.innerHTML =".seguir";
                    
            }
            else{
                p3.innerHTML = " \n     A porta esta muito emperrada\n"+
                "   você tentou e continuou sem \n"+
                "   conseguir.\n"+

                textDado++;

            }
        }
}



function lutaDado() {
    
    lutar = 1;

    select_5Id.innerHTML= " gire o dado "
    select_6Id.style.display = "none";

    forcaInimigo = 5;

    vez_luta++;

    

    var vida_do_inimigo = 35;
    var vidaPersonagem = vida;
    select_8Id.style.opacity = 10;
    select_8Id.innerHTML = "vida do personagem = 30";

         //jogador vez
            var rand = Math.floor(Math.random() * 10 );// isso porque o numero posto nâo pode ser sorteado
            rand++;
            
            resposta.innerHTML = rand;
        
            if(rand<=forcaInimigo){

                rand = forcaInimigo - rand;
            }
            else{
                rand = rand - forcaInimigo;
            }
            

            vidaInimigo = vidaInimigo - rand;

            if (vidaInimigo <= 0 ){

                select_4Id.innerHTML = "VOCÊ VENCEU ";
                lutar = 0;
                select_8Id.style.opacity = 0;

                select_2Id.innerHTML=".voltar"
            }
            else{
                select_4Id.innerHTML = "vida do inimigo= "+ vidaInimigo;

                    
                //inimigo vez
                rand = 0;
                rand = Math.floor(Math.random() * 10 );// isso porque o numero posto nâo pode ser sorteado
                rand++;
                
                resposta.innerHTML = rand;
            
                if(rand<=forca){

                    rand = forca - rand;
                }
                else{
                    rand = rand - forca;
                }

                vida = vida - rand;

                if (vida <= 0 ){

                    cenarioFundo.setAttribute("src","src/img/cenario/cn_gameOver.jpg");
                    select_8Id.innerHTML = "GAMER OVER"
                    select_8Id.style.opacity = 0;
                    lutar = 0;
                }
                else{
                    select_8Id.innerHTML = "Sua vida= "+ vida;
                }
            }
            

        }

    


    



function Fuga() {
    

    var rand = Math.floor(Math.random() * 10 );// isso porque o numero posto nâo pode ser sorteado
    rand++;
    
    resposta.innerHTML = rand;

    rand = rand + furtividade;

    if (rand > 6) {
        lutar = -1;
        p1.innerHTML = " ";
        p3.innerHTML = "parabens você conseguiu fugir"
        select_5Id.style.display = "none";
        select_6Id.style.display = "none";
        voltar();
    }
    else{
        lutar = 1;
        lutaDado();
    }


}






function voltar(){
    if(lugar == 1){ // CENARIO DE MORTE POR DESISTENCIA DO JOGO

        cenarioFundo.setAttribute("src","src/img/cenario/GAMER OVER.png");
         //não acontece nada mesmo que clique nas coisas

        momento = "morreu";
        select_2Id.innerHTML = "."
        select_1Id.innerHTML = ".kkkkk Morreu!"
        select_2Id.style.cursor = "none";
        select_1Id.style.cursor = "none";

                      
        p1.innerHTML = " \n        A fome apertava as barrigas. \n"+
        "   no dia seguinte todos decidiram dividir \n"+
        "   o sanduiche restante, ouve uma briga \n"+
        "   dois sairam feridos e você sem querer \n"+
        "   entra na disputa comeu o seu lanche \n"+
        "   rapidamente.\n"+
        "____________________________________\n\n"

        p2.innerHTML = " \n        Tres dias depois a fome\n"+
        "   fome ja era insuportavel, dois de \n"+
        "   seus 4 amigos decidiram no meio da \n"+
        "   loucura te atacar enquanto dormia. \n"+
        "____________________________________\n\n"

        p3.innerHTML =" \n     Sua carne foi devorada pelos outros \n"+
        "   e não restou sequer o suficiente \n"+
        "   para enterrar"

        lugar--;
    }
    else if(lugar == 2){ //de escada volta ao bunker (aqui esta marcado o cenario de volta)
        cenarioFundo.setAttribute("src","src/img/cenario/cn_grande_bunker.jpg")
        
        select_2Id.innerHTML = ".Dessista do futuro"
        lugar--;
    }

    else if(lugar == 3){ //de rua volta a escada (aqui esta marcado o cenario de volta)
        cenarioFundo.setAttribute("src","src/img/cenario/cn_escada.jpg");
        lugar--;
        select_3Id.innerHTML = "."
        }
    else if(lugar == 4){ //de casinhaAbandonada a rua Sinistra(aqui esta marcado o cenario de volta)
        
        cenarioFundo.setAttribute("src","src/img/cenario/cn_rua.jpg");
        lugar--;

        if (apartir >= 3){ // para fazer aparecer coisas ao sinal que os eventos vão mudando
            select_3Id.innerHTML = ".floresta";

        }
    }
    else if(lugar == 5 && momento != "Abrir porta da casa assombrada"){ //de porta a casa abandonada (aqui esta marcado o cenario de volta)
        cenarioFundo.setAttribute("src","src/img/cenario/cn_casaVelha.jpg");

        select_1Id.innerHTML =".Seguir";
        select_1Id.style.cursor="pointer";
        lugar--;
        }
    else if(lugar == 6 && lutar != 1){ //de porta a casa abandonada (aqui esta marcado o cenario de volta)
        cenarioFundo.setAttribute("src","src/img/cenario/cn_porta.jpg");

        select_1Id.innerHTML =".Seguir";
        select_1Id.style.cursor="pointer";
        select_4Id.innerHTML = "."
        select_5Id.innerHTML = " "
        select_7Id.style.display = "none";
        lugar--;
        }
    else if (lugar == 8){

        cenarioFundo.setAttribute("src","src/img/cenario/cn_rua.jpg");
        lugar= 3;

        select_1Id.innerHTML = ".Seguir"
        select_3Id.innerHTML = ".floresta"
    }
    else if (lugar == 9){

        cenarioFundo.setAttribute("src","src/img/cenario/cn_floresta_neblina.jpg");
        lugar--;

        select_3Id.innerHTML = ".Igreja";

    }
    else if (lugar == 10){

        cenarioFundo.setAttribute("src","src/img/cenario/cn_igreja_dentro.jpg");
        lugar--;

        select_3Id.innerHTML = ".Camara";

    }
}
