const pessoa = {
    nome: 'Ada',
    idade: 36,
    profissao: 'professor(a) de matemática'
}

const dst = ((obj) => {
    const { nome, idade, profissao } = obj;
    return `Essa é ${nome}, tem ${idade} anos e é ${profissao}.`;
})

console.log(dst(pessoa));