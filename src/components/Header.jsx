import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <ul>
        <Link to="/">
          <li>Toutes les recettes</li>
        </Link>
        <Link to="/add-recipe">
          <li>Entrer une recette</li>
        </Link>
        <Link to="/plan-recipe">
          <li>Planifier</li>
        </Link>
      </ul>
    </div>
  );
}
