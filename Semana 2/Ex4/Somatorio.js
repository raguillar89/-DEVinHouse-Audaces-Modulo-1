var numero = 0;
var resultado = 0;

function insertNumero(){    
    numero = parseInt(prompt("Insira um número para entrar no Somatório:"));

    if(numero == null || isNaN(numero) == true || numero == ""){
        alert("Insira somente número!");
        insertNumero();
    } else {
        somatorio();
    }
}

function somatorio(){
    do {
        resultado += numero;
        numero = parseInt(prompt("Insira um número para entrar no Somatório:"));
    } while(numero != -1)        
    
    resultado += numero;
    alert(resultado);
}
insertNumero();
reload();