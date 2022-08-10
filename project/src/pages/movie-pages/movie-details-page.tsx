import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import MoviePageFilmCard from '../../components/film-card/movie-page-film-card/movie-page-film-card';
import CatalogFilmList from '../../components/catalog-films-list/catalogFilmsList';
import PageFooter from '../../components/page-footer/page-footer';

import { moreLikeFilms, allFilms } from '../../data/films-data';
import type { Film } from '../../types/film-types';

function MovieDetailsPage(): JSX.Element {
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
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item">
                    <Link to={`/films/${filmId}`} className="film-nav__link">Overview</Link>
                  </li>
                  <li className="film-nav__item film-nav__item--active">
                    <Link to={`/films/${filmId}/details`} className="film-nav__link">Details</Link>
                  </li>
                  <li className="film-nav__item">
                    <Link to={`/films/${filmId}/review`} className="film-nav__link">Reviews</Link>
                  </li>
                </ul>
              </nav>

              <div className="film-card__text film-card__row">
                <div className="film-card__text-col">
                  <p className="film-card__details-item">
                    <strong className="film-card__details-name">Director</strong>
                    <span className="film-card__details-value">Wes Anderson</span>
                  </p>
                  <p className="film-card__details-item">
                    <strong className="film-card__details-name">Starring</strong>
                    <span className="film-card__details-value">
                      Bill Murray, <br />
                      Edward Norton, <br />
                      Jude Law, <br />
                      Willem Dafoe, <br />
                      Saoirse Ronan, <br />
                      Tony Revoloru, <br />
                      Tilda Swinton, <br />
                      Tom Wilkinson, <br />
                      Owen Wilkinson, <br />
                      Adrien Brody, <br />
                      Ralph Fiennes, <br />
                      Jeff Goldblum
                    </span>
                  </p>
                </div>

                <div className="film-card__text-col">
                  <p className="film-card__details-item">
                    <strong className="film-card__details-name">Run Time</strong>
                    <span className="film-card__details-value">1h 39m</span>
                  </p>
                  <p className="film-card__details-item">
                    <strong className="film-card__details-name">Genre</strong>
                    <span className="film-card__details-value">Comedy</span>
                  </p>
                  <p className="film-card__details-item">
                    <strong className="film-card__details-name">Released</strong>
                    <span className="film-card__details-value">2014</span>
                  </p>
                </div>
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

export default MovieDetailsPage;
