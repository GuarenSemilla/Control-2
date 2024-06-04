import React, { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

function ListaFactos() {
  const [factos, setFactos] = useState([]);
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');
  const [favoritos, setFavoritos] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetchFactos(query);
  };

  const fetchFactos = async (query) => {
    try {
      const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${query}`);
      if (!response.ok) {
        const text = await response.text();
        throw new Error(`Error ${response.status}: ${text}`);
      }
      const data = await response.json();
      setFactos(data.result);
    } catch (error) {
      setError('Error de red: ' + error.message);
    }
  };

  const resetSearch = () => {
    setQuery('');
    setFactos([]);
  };

  const toggleFavorito = (facto) => {
    setFavoritos((prevFavoritos) => {
      const favoritoExistente = prevFavoritos.find(fav => fav.ID === facto.ID);
      if (favoritoExistente) {
        return prevFavoritos.filter(fav => fav.ID !== facto.ID);
      } else {
        const nuevosFavoritos = prevFavoritos.slice(); 
        nuevosFavoritos.push(facto); 
        return nuevosFavoritos;
      }
    });
  };
  
  const listFull = factos.map((facto, index) => ({
    ID: facto.id,
    id: index,
    fact: facto.value,
    fecha: facto.updated_at,
    categorias: facto.categories
  }));

  const listItems = listFull.map(facto => (
    <li key={facto.id}>
      {facto.id}.- Fact: {facto.fact}, Fecha de creación: {facto.fecha}, Categorías: {facto.categorias.length > 0 ? facto.categorias.join(', ') : 'Ninguna'}
      <button onClick={() => toggleFavorito(facto)} style={{ marginLeft: '10px' }}>
        {favoritos.find(fav => fav.ID === facto.ID) ? 'Quitar de favoritos' : 'Me gusta'}
      </button>
    </li>
  ));

  const favoritosItems = favoritos.map(favorito => (
    <li key={favorito.ID}>
      ID: {favorito.ID}, Fact: {favorito.fact}, Fecha de creación: {favorito.fecha}, Categorías: {favorito.categorias.length > 0 ? favorito.categorias.join(', ') : 'Ninguna'}
    </li>
  ));

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Buscar:</label>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            required
          />
        </div>
        <button type="submit">Buscar</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
      <button onClick={resetSearch} >Reiniciar Búsqueda</button>
      <div>
        <h1>Lista de Factos</h1>
        <ListGroup>
          <ul>{listItems}</ul>
        </ListGroup>
      </div>
      <div>
        <h1>Favoritos</h1>
        <ListGroup>
          <ul>{favoritosItems}</ul>
        </ListGroup>
      </div>
    </div>
  );
}

export default ListaFactos;
