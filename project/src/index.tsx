import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

import { filmCard, allFilms } from './data/films-data';

ReactDOM.render(
  <React.StrictMode>
    <App filmCard={filmCard} allFilms={allFilms} />
  </React.StrictMode>,
  document.getElementById('root'));

