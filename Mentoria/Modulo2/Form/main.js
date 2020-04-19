function validate(frm){
    if(frm.nome.value == "" || frm.nome.value == null || frm.nome.value.length < 3){
        alert("preencha o campo nome");
        frm.nome.focus();

        frm.nome.style.borderRightColor == "red"

        return false;
    }
    else{
        frm.nome.style.borderRightColor == "rgb(0, 192, 0)"
    }

    if(frm.idade.value == "" || frm.idade.value == null){
        alert("preencha o campo idade");
        frm.idade.focus();

        return false;
    }

    if(frm.cpf.value == "" || frm.cpf.value == null){
        alert("preencha o campo CPF")
        frm.cpf.focus();

        return false;
    }

    let sexchange = -1;
    for(x = frm.sexo.length -1; x > -1; x--){
        if(frm.sexo[x].checked){
            sexchange = x;
        }
    }
    if(sexchange == -1){
        alert("qual o seu sexo?")
        frm.sexo[0].focus();

        return false;
    }

    if(frm.estados.value == "Selecione um Estado"){
        alert("selecione um Estado")
        frm.cpf.focus();

        return false;
    }

    if(frm.senha.value == "" || frm.senha.value != "password"){
        alert("a senha é password")
        frm.cpf.focus();

        return false;
    }

    if(frm.confirmasenha.value == "" || frm.confirmasenha.value != frm.senha.value){
        alert("confirme password")
        frm.cpf.focus();

        return false;
    }
}

function formatacpf(cpf){
    const elementactive = cpf;
    const cpfatual = cpf.value;

    /*Expressão regex onde:
     O repetidor { number } seu papel é repetir um item quantas vezes que forem preciso.
     O Grupo ( ) seu papel é agrupar itens.
     \d que representa o match com todos os números de 0 - 9.*/
    let cpfAtualizado = cpfatual.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,
    function( regex, argumento1, argumento2, argumento3, argumento4){
        return argumento1 + "." +argumento2+ "." +argumento3+ "-" +argumento4; 
    })

    elementactive.value = cpfAtualizado;

    //dinamismo do campo cpf
    if (elementactive.value.length < 12){
        elementactive.style.borderRightColor = "red";
    }
    else if (elementactive.value.length == 14){
        elementactive.style.borderRightColor = "rgb(0, 192, 0)";
    }
}












//dinamismo do campo nome
/*function character(nam){
    let nme = nam;

    if (nme.value != ""){
        nme.style.borderRightColor = "rgb(0, 192, 0)";
    }
    else{
        nme.style.borderRightColor = "red";
    }
}
//dinamismo do campo idade
function idade(ida){
    let idad = ida;

    if (idad.value != ""){
        idad.style.borderRightColor = "rgb(0, 192, 0)";
    }
    else{
        idad.style.borderRightColor = "red";
    }
}
//Método pra formatação do cpf
function formatacpf(cpf){
    const elementactive = cpf;
    const cpfatual = cpf.value;

    /*Expressão regex onde:
     O repetidor { number } seu papel é repetir um item quantas vezes que forem preciso.
     O Grupo ( ) seu papel é agrupar itens.
     \d que representa o match com todos os números de 0 - 9.*/
    /*let cpfAtualizado = cpfatual.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,
    function( regex, argumento1, argumento2, argumento3, argumento4){
        return argumento1 + "." +argumento2+ "." +argumento3+ "-" +argumento4; 
    })

    elementactive.value = cpfAtualizado;

    //dinamismo do campo cpf
    if (elementactive.value.length < 12){
        elementactive.style.borderRightColor = "red";
    }
    else if (elementactive.value.length == 14){
        elementactive.style.borderRightColor = "rgb(0, 192, 0)";
    }
}

//dinamismo e verificação do campo sexo
function check(rb1){
    radio1 = rb1;
    if (radio1.checked == true){
        div1.style.borderBottomColor = "rgb(0, 192, 0)"
        div2.style.borderBottomColor = "#0296f3"
    }
}

function check1(rb2){
    radio2 = rb2;
     if (radio2.checked == true){
        div2.style.borderBottomColor = "rgb(0, 192, 0)"
        div1.style.borderBottomColor = "#0296f3"
    }
}

function estado(statem){
    let state = statem;

    if (state.value != "Selecione um Estado"){
        state.style.borderRightColor = "rgb(0, 192, 0)";
    }
    else{
        state.style.borderRightColor = "red";
    }
}

//dinamismo e verificação do campo senha
function verificasenha(password){
    let senha = password;

    if (senha.value != "password"){
        senha.style.borderRightColor = "red";
    }
    else if (senha.value == "password"){
        senha.style.borderRightColor = "rgb(0, 192, 0)";
    }   
}

//dinamismo e verificação do campo verificar senha
function veracidade(verify){
    let verificar = verify;
    let pass = document.getElementById("password");

    if (verificar.value != pass.value){
        verificar.style.borderRightColor = "red";
    }
    else if (verificar.value == "password"){
        verificar.style.borderRightColor = "rgb(0, 192, 0)";
    } 
}

function enviar(){
    var Name = document.getElementById("nome");
    var Idade = document.getElementById("age");
    var CPF = document.getElementById("cpf");

    if (Name.value == '' ||
        Idade.value == '' ||
        CPF.value == ''){
        alert("Por favor preencha todos os campos Corretamente");
        return false;
    }
}*/
