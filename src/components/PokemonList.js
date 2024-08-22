import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard';
import './PokemonList.css'; // For custom styling

const PokemonList = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=50');
        setPokemonData(response.data.results);
      } catch (error) {
        console.error('Error fetching Pokémon data:', error);
      }
    };

    fetchPokemon();
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredPokemon = pokemonData.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="pokemon-list">
      <input
        type="text"
        placeholder="Search Pokémon..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className="pokemon-cards">
        {filteredPokemon.map(pokemon => (
          <PokemonCard
            key={pokemon.name}
            name={pokemon.name}
            image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.url.split('/')[6]}.png`}
          />
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
