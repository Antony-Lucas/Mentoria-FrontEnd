let txty = document.getElementById("textyou");
let txto = document.getElementById("textother");
var msg = document.getElementById("message");

msg.addEventListener("keydown", function(e){
    var key = e.keyCode || e.which;

    if(key == 13){
        //se o campo estiver vazio ou esstiver em branco, retornará false.
        if(msg.value == "" || msg.value.match(/^[ \t]+$/)){
            return false;
        }
        //senão irá retornar o valor digitado para os campos.
        else{
            var elmt = document.createElement('span');
            elmt.innerHTML = msg.value;
            
            txto.appendChild(elmt);
                
            if (contar() % 2 == 0){
                txty.appendChild(elmt);
            }
            else if(contar() % 2 != 0){
                txto.appendChild(elmt);
            }
            msg.value = ""; 
        }
    }
})

function contar(){
    return document.querySelectorAll("span").length;
}

function quebra(){
    return msg.value.length;
}