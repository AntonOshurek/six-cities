import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Logo from '../../default-components/logo/logo';
import UserBlock from '../../default-components/user-block/user-block';
import MoviePageAddReviewForm from '../movie-page-add-review-form/movie-page-add-review-form';

import { allFilms } from '../../../data/films-data';
import type { FilmItem } from '../../../types/film-types';

function MoviePageAddReview(): JSX.Element {
  const {filmId} = useParams();
  const [currentFilm, setCurrentFilm] = useState<FilmItem>();

  useEffect(() => {
    getMovie();
  }, []);

  function getMovie(): void {
    allFilms.map((item) => {
      if(filmId && +item.id === +filmId) {
        setCurrentFilm(item);
      }
    });
  }

  return(
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={currentFilm?.postrer_image} alt={currentFilm?.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${filmId}`} className="breadcrumbs__link">{currentFilm ? currentFilm.name : 'No name Film'}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a href='/' className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <UserBlock />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={currentFilm?.preview_image} alt="The Grand Budapest Hotel poster" width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <MoviePageAddReviewForm />
      </div>

    </section>
  );
}

export default MoviePageAddReview;
