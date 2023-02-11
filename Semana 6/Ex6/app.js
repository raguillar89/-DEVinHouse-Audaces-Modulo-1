const obterIdadeMedia = async (nome) => {
    const apiUrl = `https://api.agify.io/?country_id=BR&name=${nome}`;

    try{
        const response = await fetch(apiUrl);
        const data = await response.json()

        return data;
    } catch (error){
        console.error(error);
    }
}

const form = document.getElementById('form')
form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const nome = event.target.nome.value;
    const data = await obterIdadeMedia(nome);

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = data.age;
});
