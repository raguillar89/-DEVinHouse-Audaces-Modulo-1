import Funcionario from "./ex1.js";

const ada = new Funcionario("528.442.040-31", "Ada Lovelace", 1000);

console.log(ada.salario);
ada.promover(50);
console.log(ada.salario);

ada.validaCPF(ada.cpf);