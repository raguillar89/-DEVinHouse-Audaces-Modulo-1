let funcao;
let vl1;
let vl2;
let total;

function insertNumero(){  
    funcao = prompt("Escolha qual cálculo quer fazer  +  -  *  /");      

    if(funcao == "+" || funcao == "-" || funcao == "*" || funcao == "/"){
        vl1 = parseInt(prompt("Insira o primeiro valor que deseja calcular"));
        vl2 = parseInt(prompt("Insira o segundo valor que deseja calcular"));

        if(vl1 == null || isNaN(vl1) == true || vl1 == "" || vl2 == null || isNaN(vl2) == true || vl2 == ""){
            alert("Insira somente número!");
            insertNumero();
        } else {
            calculadora();
            limpar();
        }           
    } else {
        alert("Insira um símbolo válido!");
        insertNumero();     
    }
}

function limpar(){
    localStorage.clear();
    location.reload();
}

function calculadora(){
    switch(funcao){
        case "+":
            total = vl1 + vl2;

            alert(`O resultado de ${vl1} + ${vl2} é igual a ${total}.`);
            break;
        
        case "-":
            total = vl1 - vl2;

            alert(`O resultado de ${vl1} - ${vl2} é igual a ${total}.`);
            break;

        case "*":
            total = vl1 * vl2;

            alert(`O resultado de ${vl1} x ${vl2} é igual a ${total}.`);
            break;
            
        case "/":
            total = vl1 / vl2;

            alert(`O resultado de ${vl1} ÷ ${vl2} é igual a ${total}.`);
            break;

        default:
            break;
    }        
}
insertNumero();