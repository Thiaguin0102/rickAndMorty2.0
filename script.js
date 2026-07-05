const lista_de_personagens = document.querySelector('#lista_de_personagens')
const filtrar = document.querySelector('#filtrar')

async function exibirPersonagens(url) {
    const response = await fetch(url);
    const data =  await response.json()
    lista_de_personagens.innerHTML = ''
    data.results.forEach((element)=>{
        const div = document.createElement('div')
        div.className = 'card'

        const div_foto_personagem = document.createElement('div')
        
        const foto_personagem = document.createElement('img')
        foto_personagem.src = element.image

        const novo_personagem = document.createElement('div')
        
        const nome_personagem = document.createElement('h2')
        nome_personagem.innerHTML = `<span>Nome:</span> <br> ${element.name}`
        
        const especie_personagem = document.createElement('p');
        especie_personagem.innerHTML = `<span>Espécie:</span> <br> ${element.species}`
        
        const status_personagem = document.createElement('p');
        status_personagem.innerHTML = `<span>Status:</span> <br> ${element.status}`
        
        const localizacao = document.createElement('p');
        localizacao.innerHTML = `<span>Localização:</span> <br> ${element.location.name}`

        div_foto_personagem.append(foto_personagem)
        novo_personagem.append(nome_personagem, especie_personagem,status_personagem, localizacao)
        div.append(div_foto_personagem, novo_personagem)
        lista_de_personagens.append(div)
  })
}

exibirPersonagens('https://rickandmortyapi.com/api/character')

filtrar.addEventListener('input', () => {
  exibirPersonagens(`https://rickandmortyapi.com/api/character/?name=${filtrar.value}`);
});