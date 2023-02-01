export default class Juros {
    constructor(capitalInicial, taxaAplicada, tempo){
        this.capitalInicial = capitalInicial;
        this.taxaAplicada = (taxaAplicada / 100);
        this.tempo = tempo;
    }

    calcularJurosSimples() {
        let jurosSimples = this.capitalInicial * this.taxaAplicada * this.tempo;
        let jS = jurosSimples.toFixed(2);
        console.log("A Aplicação nos Juros Simples renderá R$" + jS);
    }

    calcularJurosCompostos() {
        let jurosCompostos = this.capitalInicial * (1 + this.taxaAplicada) ** this.tempo;
        let jC = jurosCompostos.toFixed(2);
        console.log("A Aplicação nos Juros Simples renderá R$" + jC);
    }
}