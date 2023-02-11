const obterUsuarios = async (qtd = 4) => {
    const url = `https://randomuser.me/api/?results=${qtd}`

    try {
        const response = await fetch(url);
        const data = await response.json();

        return data;
    } catch (error) {
        console.error(error);
    }
}

window.addEventListener('load', async () => {
    const data = await obterUsuarios(1);
    const lista = document.getElementById('lista');

    data.results.forEach((usuario) => {
        const item = document.createElement('li');
        const nome = document.createElement('h5');
        const email = document.createElement('p');
        const endereco = document.createElement('p');
        const imagem = document.createElement('img');

        const {street, city, state, country} = usuario.location;
        const {title, first, last} = usuario.name

        nome.innerText = `${title} ${first} ${last}`;
        email.innerText = usuario.email;
        endereco.innerText = `${street.name} ${street.number} ${city} ${state} ${country}`;
        imagem.src = usuario.picture.large;
        imagem.alt = 'Imagem do Usuário';

        item.appendChild(nome);
        item.appendChild(email);
        item.appendChild(endereco);
        item.appendChild(imagem);
        
        lista.appendChild(item);
    });

    console.log(data);
})