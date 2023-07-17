
// cenario inicio

var conteine_index = document.getElementById("conteine_index");
var cn_index_telabunker = document.getElementById("cn_index_telabunker");
var cn_index_telabousa = document.getElementById("cn_index_telabousa");

var v = 0;
conteine_index.style.display = "block"


cn_index_telabunker.addEventListener("click", function(){

    cn_index_telabunker.style.display = "none"
    cn_index_telabousa.style.display = "block"

})
cn_index_telabousa.addEventListener("click", function(){

    cn_index_telabousa.style.display = "none"
    conteine_index.style.display = "block"


    /*v++;

    if (v==1) {
        
    }*/

})




