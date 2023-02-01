export default class Fatura{
    constructor(id, descricao, quantidade, preco){
        this.id = id;
        this.descricao = descricao;
        this.quantidade = quantidade;
        this.preco = preco;
    }

    obterValorTotal() {
        let valorTotal = this.quantidade * this.preco;
        console.log("O Valor Total do pedido é de R$" + valorTotal + ",00 .");
    }
}