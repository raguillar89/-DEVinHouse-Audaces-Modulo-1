import Partida from "./partida.js";

export default class Time {
    constructor(nome, sigla, vitorias, derrotas, empates, golsMarcados, golsSofridos) {
        this.nome = nome;
        this.sigla = sigla;
        this.vitorias = vitorias;
        this.derrotas = derrotas;
        this.empates = empates;
        this.golsMarcados = golsMarcados;
        this.golsSofridos = golsSofridos;
    }

    get numeroDeJogos() {
        return parseInt(this.vitorias + this.derrotas + this.empates);
    }

    get numeroDePontos() {
        return parseInt((this.vitorias * 3) + (this.derrotas * 0) + (this.empates * 1));
    }

    get saldoDeGols() {
        return parseInt(this.golsMarcados - this.golsSofridos);
    }

    computarPartida(partida) {
        if(partida.siglaTimeA === this.sigla){
            this.golsMarcados += partida.golsTimeA;
            this.golsSofridos += partida.golsTimeB;            
            if(partida.golsTimeA > partida.golsTimeB) {
                this.vitorias++;
            }else if(partida.golsTimeA < partida.golsTimeB) {
                this.derrotas++;
            }else{
                this.empates++;
            }
        }else if(partida.siglaTimeB === this.sigla) {
            this.golsMarcados += partida.golsTimeB;
            this.golsSofridos += partida.golsTimeA;
            if(partida.golsTimeB > partida.golsTimeA) {
                this.vitorias++;
            }else if(partida.golsTimeB < partida.golsTimeA) {
                this.derrotas++;
            }else{
                this.empates++;
            }
        }else{
            console.log("Time " + this.nome + " não encontrado nessa partida!");
        }
    }

    exibirSituacao() {
        console.log("Nome do Time: " + this.nome + 
                    "\nSigla do Time: " + this.sigla + 
                    "\nPontuação: " + this.numeroDePontos + 
                    "\nPartidas: " + this.numeroDeJogos + 
                    "\nVitórias: " + this.vitorias + 
                    "\nDerrotas: " + this.derrotas + 
                    "\nEmpates: " + this.empates + 
                    "\nGols Pró: " + this.golsMarcados + 
                    "\nGols Contra: " + this.golsSofridos + 
                    "\nSaldo de Gols: " + this.saldoDeGols);
    }
}