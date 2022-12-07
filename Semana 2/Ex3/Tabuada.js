let numero;
let resultado = "";

function insertNumero(){  
    reload();
    numero = prompt("Insira o número que você quer ver a Tabuada: ");
    
    if(numero == "" || numero == null || isNaN(numero) == true){
        alert("Insira somente números!")
        insertNumero();
    } else {                
        tabuada();
    }
}

function reload(){
    location.reload();
}

function tabuada(){
    for(let i = 0; i < 11; i++){
        resultado += numero + " x " + i + " = " + (numero * i) + "\n";                
    }
    alert(resultado);
}
insertNumero();