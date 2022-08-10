import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

// import { Link } from 'react-router-dom';

import MoviePageFilmCard from '../../components/film-card/movie-page-film-card/movie-page-film-card';
import CatalogFilmList from '../../components/catalog-films-list/catalogFilmsList';
import PageFooter from '../../components/page-footer/page-footer';

import MoviePageFilmCardNav from '../../components/film-card/movie-page-film-card-nav/movie-page-film-card-nav';

import { moreLikeFilms, allFilms } from '../../data/films-data';
import type { Film } from '../../types/film-types';

function MoviePage(): JSX.Element {
  const {filmId} = useParams();
  const [currentFilm, setCurrentFilm] = useState<Film>();

  useEffect(() => {
    getMovie();
  }, []);

  function getMovie(): void {
    allFilms.map((item) => {
      if(item.key === filmId) {
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
              <img src={currentFilm?.img} alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="film-card__desc">
              {/* <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item film-nav__item--active">
                    <Link to={`/films/${filmId}`} className="film-nav__link">Overview</Link>
                  </li>
                  <li className="film-nav__item">
                    <Link to={`/films/${filmId}/details`} className="film-nav__link">Details</Link>
                  </li>
                  <li className="film-nav__item">
                    <Link to={`/films/${filmId}/review`} className="film-nav__link">Reviews</Link>
                  </li>
                </ul>
              </nav> */}

              {filmId && <MoviePageFilmCardNav filmId={filmId}/>}

              <div className="film-rating">
                <div className="film-rating__score">8,9</div>
                <p className="film-rating__meta">
                  <span className="film-rating__level">Very good</span>
                  <span className="film-rating__count">240 ratings</span>
                </p>
              </div>

              <div className="film-card__text">
                <p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustaves friend and protege.</p>

                <p>Gustave prides himself on providing first-class service to the hotels guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustaves lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.</p>

                <p className="film-card__director"><strong>Director: Wes Anderson</strong></p>

                <p className="film-card__starring"><strong>Starring: Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other</strong></p>
              </div>
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

