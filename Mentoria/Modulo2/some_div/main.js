var sta = document.getElementById("show_hidden");

function state(){
    var div = document.querySelector(".block").style.visibility;

    if (div == "hidden"){
        sta.value = "Clique aqui para esconder"
        document.querySelector(".block").style.visibility = "visible";
   }

   else{
        sta.value = "Clique aqui para mostrar"
        document.querySelector(".block").style.visibility = "hidden";
   }
}