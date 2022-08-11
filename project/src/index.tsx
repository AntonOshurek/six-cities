import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

import { filmCard, newFilmCard } from './data/films-data';

ReactDOM.render(
  <React.StrictMode>
    <App filmCard={filmCard} allFilms={newFilmCard} />
  </React.StrictMode>,
  document.getElementById('root'));

