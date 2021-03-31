import React from 'react';
import PropTypes from 'prop-types';

export default function RecipeCard({ recipe }) {
  const { name, diet, type, temperature } = recipe;
  const image = recipe.image_url;
  return (
    <div>
      <img src={image} alt={name} />
      <span>{name}</span>
      <span>{diet}</span>
      <span>{type}</span>
      <span>{temperature}</span>
    </div>
  );
}

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    idrecipe: PropTypes.number,
    name: PropTypes.string,
    diet: PropTypes.string,
    image_url: PropTypes.string,
    type: PropTypes.string,
    temperature: PropTypes.string,
  }).isRequired,
};
