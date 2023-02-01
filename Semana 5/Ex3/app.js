import Personagem from "./personagem.js";

const alyx = new Personagem("Alyx");
console.log("Percentual de Vida Atual: " + alyx.percentualVida + "%");

alyx.sofreuDano(50);
console.log("Percentual de Vida Atual: " + alyx.percentualVida + "%");

alyx.usouKitMedico();
console.log("Percentual de Vida Atual: " + alyx.percentualVida + "%");