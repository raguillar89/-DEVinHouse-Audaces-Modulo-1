export default class CalculadoraDeArea {
    constructor(tipo, base, altura){
        this.tipo = tipo;
        this.base = base;
        this.altura = altura;
    }

    calcular() {
        if (this.tipo == "triangulo"){
            console.log(((this.base * this.altura)/2));
        } else if (this.tipo == "quadrado" || this.tipo == "retangulo"){
            console.log((this.base * this.altura));
        }
    }
}