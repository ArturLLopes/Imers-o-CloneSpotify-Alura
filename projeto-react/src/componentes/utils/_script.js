import React, { useState, useEffect } from "react";

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState(""); // Estado para o termo de busca
  const [artists, setArtists] = useState([]); // Estado para os artistas filtrados
  const [showPlaylists, setShowPlaylists] = useState(false); // Estado para exibir/ocultar playlists

  // Função para realizar uma requisição à API
  const fetchArtists = async (searchTerm) => {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setArtists(data); // Atualiza o estado dos artistas com os resultados da API
    } catch (error) {
      console.error("Erro ao buscar artistas:", error);
    }
  };

  // Função chamada sempre que o campo de busca muda
  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase().trim();
    setSearchTerm(value);

    if (value === "") {
      setShowPlaylists(false); // Oculta playlists
      return;
    }

    fetchArtists(value); // Busca artistas com o termo de busca
    setShowPlaylists(false); // Garante que as playlists estejam ocultas
  };

  return (
    <div className="search-container">
      {/* Campo de busca */}
      <input
        id="search-input"
        type="text"
        placeholder="Buscar artistas"
        value={searchTerm}
        onChange={handleInputChange}
        className="search-input"
      />

      {/* Resultados de artistas */}
      <div id="result-artist" className={`result-artist ${artists.length > 0 ? "" : "hidden"}`}>
        <div className="grid-container">
          {artists.map((artist) => (
            <div key={artist.id} className="artist-card">
              <div className="card-img">
                <img className="artist-img" src={artist.urlImg} alt={artist.name} />
                <div className="play">
                  <span className="fa fa-solid fa-play"></span>
                </div>
              </div>
              <div className="card-text">
                <span className="artist-name">{artist.name}</span>
                <span className="artist-categorie">Artista</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Resultados de playlists (placeholder) */}
      <div id="result-playlists" className={`result-playlists ${showPlaylists ? "" : "hidden"}`}>
        {/* Conteúdo de playlists pode ser adicionado aqui */}
      </div>
    </div>
  );
};

export default SearchComponent;
