import React from 'react';
import './PokemonCard.css'; // For custom styling

const PokemonCard = ({ name, image }) => {
  return (
    <div className="pokemon-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
    </div>
  );
};

export default PokemonCard;
