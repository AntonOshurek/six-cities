import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import MoviePageFilmCard from '../components/movie-page-components/movie-page-banner-film-card/movie-page-banner-film-card';
import MoviePageNavigation from '../components/movie-page-components/movie-page-navigation/movie-page-navigationv';
import CatalogFilmList from '../components/catalog/catalog-films-list/catalog-films-list';
import PageFooter from '../components/default-components/page-footer/page-footer';

import { moreLikeFilms, newFilmCard } from '../data/films-data';
import type { newFilm } from '../types/film-types';

function MoviePage(): JSX.Element {
  const {filmId} = useParams();
  const [currentFilm, setCurrentFilm] = useState<newFilm>();

  useEffect(() => {
    getMovie();
  }, []);

  function getMovie(): void {
    newFilmCard.map((item) => {
      if(filmId && +item.id === +filmId) {
        setCurrentFilm(item);
      }
    });
  }
  return(
    <>
      <section className="film-card film-card--full">
        {currentFilm && <MoviePageFilmCard filmCardData={currentFilm}/>}

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={currentFilm?.postrer_image} alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="film-card__desc">

              {filmId && <MoviePageNavigation filmId={filmId}/>}

              <Outlet />

            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            <CatalogFilmList films={moreLikeFilms}/>
          </div>
        </section>

        <PageFooter />
      </div>
    </>
  );
}

export default MoviePage;

