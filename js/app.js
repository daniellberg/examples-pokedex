
// define uma variável com a URL dos dados
const URL = "http://127.0.0.1:5500/pokemon.json"

async function carregarPokemons() {
    // faz a chamada para a URL de dados
    const response = await fetch(URL)
    // converte a resposta JSON em um array JavaScript
    const pokemons = await response.json()
    // pegar o elemento de contador
    const contador = document.querySelector('#contador')
    // atualiza o HTML do span do contador
    contador.innerHTML = pokemons.length

    // captura a div que vai receber os bixinho
    const listPokemons = document.querySelector('#lista-pokemons')
    // percorre a lista de pokemons que foi recebida via fetch
    for (const pokemon of pokemons) {
        // converte o nome do bixinho para letras minúsculas
        const imageName = pokemon.name.toLowerCase()
            .replace()
        // cria uma variável com a URL da imagem do bixinho
        const src = `img/pokemons/${imageName}.jpg`
        // cria um elemento HTML para adicionar o template e um novo item na lista
        const row = document.createElement('div')
        // atualiza o template do novo elemento com um HTML fofinho
        // aproveita para mudar os pontos onde o conteúdo é dinâmico
        row.innerHTML = `<div class="col-lg-3">
            <div class="pokemon panel panel-primary">
                <div class="panel-heading">
                    <h1>${pokemon.name}
                        <span
                            class="label label-primary pull-right">#${pokemon.id}</span>
                    </h1>
                </div>
                <div class="panel-body">
                    <img class="avatar center-block"
                            src="${src}">
                    </div>
                <div class="panel-footer">
                    <div class="text-center">
                        <small>${pokemon.species}</small>
                    </div>
                </div>
            </div>
        </div>`
        // adiciona o novo item na lista
        listPokemons.appendChild(row)
    }
}

// chama (executa) a função que busca os pokemnons
carregarPokemons()
