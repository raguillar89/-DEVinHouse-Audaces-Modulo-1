import Usuario from "./usuario.js";

const usuario1 = new Usuario("Renan", "renan@email.com.br", "123456");
const formulario = document.getElementById('form');

const autenticarLogin = (event) => {
    event.preventDefault();

    const emailInformado = event.target.email.value;
    const senhaInformada = event.target.senha.value;

    if(usuario1.autenticar(emailInformado, senhaInformada) === true){
        alert("Login realizado com sucesso!");
    } else {
        alert("Email e/ou Senha incorretos!");
    }    
}
formulario.addEventListener('submit', autenticarLogin);