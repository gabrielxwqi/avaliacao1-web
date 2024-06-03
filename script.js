function dividirNumeros(){
    var numero7 = parseInt(document.getElementById("num7").value);
    var numero8 = parseInt(document.getElementById("num8").value);
    var resultado = numero7/numero8
    //alert(resultado)
    var teste = document.getElementById("resultadoDivisao")
    teste.innerHTML=resultado
    if(numero8==0){
        alert("Seu número não pode ser 0, digite outro")
    }
}

function mediaNumero(){
    var numero1 = document.getElementById("num15").value;
    var numero1Alterado = parseInt(numero1)
    var numero2 = document.getElementById("num16").value;
    var numero2Alterado = parseInt(numero2)
    var numero3 = document.getElementById("num17").value;
    var numero3Alterado = parseInt(numero3)
    var numero4 = document.getElementById("num18").value;
    var numero4Alterado = parseInt(numero4)
    var resultado = numero1Alterado+numero2Alterado+numero3Alterado+numero4Alterado
    media = resultado/5
    if(resultado>6){
        alert("Você foi aprovado, sua nota é = "+resultado)
    }
    if(resultado<6){
        alert("Você foi reprovado, sua nota é = "+resultado)
    }
}

function programaNumero(){
    var numero1 = document.getElementById("num19").value;
    var numero1Alterado = parseInt(numero1)
    var resultado = numero1Alterado
    if(resultado>10){
        alert("É maior que 10")
    }
    if(resultado<10){
         alert("É menor que 10")
    }
}

function somarNumero(){
    var numero1 = document.getElementById("num20").value;
    var numero1Alterado = parseInt(numero1)
    var numero2 = document.getElementById("num21").value;
    var numero2Alterado = parseInt(numero2)
    var numero3 = document.getElementById("num22").value;
    var numero3Alterado = parseInt(numero3)
    var resultado = numero1Alterado+numero2Alterado
    if(numero3<resultado){
        alert(resultado+" É maior que "+numero3)
    }
    if(numero3>resultado){
        alert(resultado+" É menor que "+numero3)
    }
}

function somarNumero(){
    var numero1 = document.getElementById("num20").value;
    var numero1 = document.getElementById("num20").value;
    var resultado = numero1 * numero2
}