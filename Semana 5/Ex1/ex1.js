export default class Funcionario{
    constructor(cpf, nomeCompleto, salario){
        this.cpf = cpf;
        this.nomeCompleto = nomeCompleto;
        this.salario = salario;
    }

    promover(percentual){
        this.salario *= ((percentual / 100) + 1);
    }

    validaCPF(cpf) {      
        let strCPF = String(cpf).replace(/[^\d]/g, '');
        
        if(strCPF.length !== 11) {
            console.log("CPF Inválido!");
        } else {
            console.log("CPF Válido!");
        }
    }
}