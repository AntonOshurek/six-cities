import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

import type { FilmCardData } from './types/film-types';
import { allFilms } from './data/films-data';


const filmCard:FilmCardData = {
  bg: 'img/bg-the-grand-budapest-hotel.jpg',
  poster: 'img/the-grand-budapest-hotel-poster.jpg',
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: 2014,
};

ReactDOM.render(
  <React.StrictMode>
    <App filmCard={filmCard} allFilms={allFilms} />
  </React.StrictMode>,
  document.getElementById('root'));

