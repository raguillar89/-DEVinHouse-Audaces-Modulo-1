var idade;

function insertNumero(){    
    idade = parseInt(prompt("Insira a idade para que seja analisada e fornecida a classificação etária:"));

    if(idade == null || isNaN(idade) == true || idade == ""){
        alert("Insira somente número!");
        insertNumero();
    } else {
        classificacao();
        limpar();
    }
}

function limpar(){
    location.reload();
}

function classificacao(){
    if (idade >= 0 && idade <= 15){
        alert("Jovem!");
    } else if (idade > 15 && idade <=64){
        alert("Adulto!");
    } else {
        alert("Idoso!");
    }
}
insertNumero();
reload();