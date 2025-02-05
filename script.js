// Obtém o elemento de entrada de texto (campo de busca) pelo seu ID
const searchInput = document.getElementById('search-input');

// Obtém o elemento onde os resultados de artistas serão exibidos pelo ID
const resultArtist = document.getElementById("result-artist");

// Obtém o elemento onde os resultados das playlists serão exibidos pelo ID
const resultPlaylist = document.getElementById('result-playlists');

// Função para realizar uma requisição à API
function requestApi(searchTerm) {
    // Define a URL da API com o termo de busca como um parâmetro de consulta
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`;

    // Realiza a requisição fetch para a URL
    fetch(url)
        .then((response) => response.json()) // Converte a resposta em JSON
        .then((result) => displayResults(result, searchTerm)); // Passa os dados recebidos para a função displayResults
}

// Função para exibir os resultados da busca
function displayResults(result, searchTerm) {
    // Oculta os resultados de playlists (se estiverem visíveis)
    resultPlaylist.classList.add("hidden");

    // Seleciona o container onde os cards dos artistas serão adicionados
    const gridContainer = document.querySelector('.grid-container');
    
    // Limpa os resultados anteriores (se houver) no container
    gridContainer.innerHTML = '';

    // Filtra os artistas que contêm o termo de busca no nome (case insensitive)
    const filteredArtists = result.filter(artist => artist.name.toLowerCase().includes(searchTerm));

    // Itera pelos artistas filtrados para criar os elementos visuais (cards)
    filteredArtists.forEach(artist => {    
        // Cria um elemento div para representar o card do artista
        const artistCard = document.createElement('div');
        artistCard.classList.add('artist-card'); // Adiciona a classe CSS para estilização

        // Define o HTML do card com a imagem, ícone de play e informações do artista
        artistCard.innerHTML = `
            <div class="card-img">
                <img class="artist-img" src="${artist.urlImg}" />
                <div class="play">
                    <span class="fa fa-solid fa-play"></span>
                </div>
            </div>
            <div class="card-text">              
                <span class="artist-name">${artist.name}</span>
                <span class="artist-categorie">Artista</span>
            </div>
        `;
        
        // Adiciona o card do artista no container de resultados
        gridContainer.appendChild(artistCard);
    });

    // Exibe a seção de resultados de artistas
    resultArtist.classList.remove('hidden');
}

// Adiciona um evento de entrada (input) no documento para escutar mudanças no campo de busca
document.addEventListener('input', function () {
    // Obtém o valor do campo de busca, converte para letras minúsculas e remove espaços extras
    const searchTerm = searchInput.value.toLowerCase().trim();

    // Se o campo de busca estiver vazio, exibe os artistas padrão e oculta as playlists
    if (searchTerm === '') {
        resultPlaylist.classList.add('hidden'); // Oculta as playlists
        resultArtist.classList.remove('hidden'); // Garante que os artistas sejam exibidos
        return; // Sai da função
    }
    
    // Chama a função para realizar a busca na API com o termo inserido
    requestApi(searchTerm);
});
