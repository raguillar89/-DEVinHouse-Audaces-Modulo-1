let vlIn;
let raiz;
let sum = "";
let i = 1;

function insertNumero(){    
    vlIn = parseInt(prompt("Insira o valor inicial: "));
    raiz = parseInt(prompt("Insira o valor raiz: "));

    if(vlIn == null || isNaN(vlIn) == true || vlIn == "" || raiz == null || isNaN(raiz) == true || raiz == ""){
        alert("Insira somente número!");
        insertNumero();
    } else {
        pa();
        reload();
    }
}

function reload(){
    location.reload();
}

function pa(){
    sum += (vlIn) + "\n";
    while(i < 10){
        sum += (vlIn += raiz) + "\n";
        i++
    }
    alert(sum);
}
insertNumero();