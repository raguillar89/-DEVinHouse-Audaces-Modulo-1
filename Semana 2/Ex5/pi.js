var numInsert;
var numInicial = 0;
var countPar = 0;
var countImpar = 0;
var resto;

function insertNumero(){    
    numInsert = parseInt(prompt("Insira um número:"));

    if(numInsert == null || isNaN(numInsert) == true || numInsert == ""){
        alert("Insira somente número!");
        insertNumero();
    } else {
        calc();
        limpar();
    }
}

function limpar(){
    location.reload();
}

function calc(){
    while(numInicial <= numInsert){
        resto = numInicial % 2;
        if(resto == 0){
            countPar++;
        } else {
            countImpar++;
        }
        numInicial++;        
    }
    alert("Quantidade de números pares = " + countPar);
    alert("Quantidade de números impares = " + countImpar);
}
insertNumero();