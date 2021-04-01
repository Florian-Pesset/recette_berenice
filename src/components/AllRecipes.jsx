import React, { useState, useEffect } from 'react';
import GetAllRecipes from '../api/GetAllRecipes';
import RecipeCard from './RecipeCard';

export default function AllRecipes() {
  const [allRecipes, setAllRecipes] = useState([]);
  const [errorServer, setErrorServer] = useState('');

  useEffect(() => {
    GetAllRecipes(setAllRecipes, setErrorServer);
  }, []);

  return (
    <div>
      {errorServer || ''}
      {allRecipes.map((recipe) => (
        <RecipeCard recipe={recipe} />
      ))}
    </div>
  );
}
