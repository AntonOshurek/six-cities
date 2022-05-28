import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

type FilmCardObject = {
  bg: string,
  poster: string,
  title: string,
  genre: string,
  year: number,
};

const filmCard:FilmCardObject = {
  bg: 'img/bg-the-grand-budapest-hotel.jpg',
  poster: 'img/the-grand-budapest-hotel-poster.jpg',
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: 2014,
};

ReactDOM.render(
  <React.StrictMode>
    <App filmCard={filmCard} />
  </React.StrictMode>,
  document.getElementById('root'));

