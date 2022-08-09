import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import CatalogFilmList from '../components/catalog-films-list/catalogFilmsList';
import Logo from '../components/logo/logo';
import UserBlock from '../components/user-block/user-block';
import PageFooter from '../components/page-footer/page-footer';

import { moreLikeFilms, allFilms } from '../data/films-data';
import type { Film } from '../types/film-types';

function MovieReviewPage(): JSX.Element {
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
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt={currentFilm?.title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo />
            <UserBlock />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{currentFilm?.title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">Drama</span>
                <span className="film-card__year">2014</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <a href="add-review.html" className="btn film-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item">
                    <Link to={`/films/${filmId}`} className="film-nav__link">Overview</Link>
                  </li>
                  <li className="film-nav__item">
                    <a href="test" className="film-nav__link">Details</a>
                  </li>
                  <li className="film-nav__item film-nav__item--active">
                    <Link to={`/films/${filmId}/review`} className="film-nav__link">Reviews</Link>
                  </li>
                </ul>
              </nav>

              <div className="film-card__reviews film-card__row">
                <div className="film-card__reviews-col">
                  <div className="review">
                    <blockquote className="review__quote">
                      <p className="review__text">Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the directors funniest and most exquisitely designed films in years.</p>

                      <footer className="review__details">
                        <cite className="review__author">Kate Muir</cite>
                        <time className="review__date" dateTime="2016-12-24">December 24, 2016</time>
                      </footer>
                    </blockquote>

                    <div className="review__rating">8,9</div>
                  </div>

                  <div className="review">
                    <blockquote className="review__quote">
                      <p className="review__text">Andersons films are too precious for some, but for those of us willing to lose ourselves in them, theyre a delight. The Grand Budapest Hotel is no different, except that he has added a hint of gravitas to the mix, improving the recipe.</p>

                      <footer className="review__details">
                        <cite className="review__author">Bill Goodykoontz</cite>
                        <time className="review__date" dateTime="2015-11-18">November 18, 2015</time>
                      </footer>
                    </blockquote>

                    <div className="review__rating">8,0</div>
                  </div>

                  <div className="review">
                    <blockquote className="review__quote">
                      <p className="review__text">I didnt find it amusing, and while I can appreciate the creativity, its an hour and 40 minutes I wish I could take back.</p>

                      <footer className="review__details">
                        <cite className="review__author">Amanda Greever</cite>
                        <time className="review__date" dateTime="2015-11-18">November 18, 2015</time>
                      </footer>
                    </blockquote>

                    <div className="review__rating">8,0</div>
                  </div>
                </div>
                <div className="film-card__reviews-col">
                  <div className="review">
                    <blockquote className="review__quote">
                      <p className="review__text">The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.</p>

                      <footer className="review__details">
                        <cite className="review__author">Matthew Lickona</cite>
                        <time className="review__date" dateTime="2016-12-20">December 20, 2016</time>
                      </footer>
                    </blockquote>

                    <div className="review__rating">7,2</div>
                  </div>

                  <div className="review">
                    <blockquote className="review__quote">
                      <p className="review__text">It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.</p>

                      <footer className="review__details">
                        <cite className="review__author">Paula Fleri-Soler</cite>
                        <time className="review__date" dateTime="2016-12-20">December 20, 2016</time>
                      </footer>
                    </blockquote>

                    <div className="review__rating">7,6</div>
                  </div>

                  <div className="review">
                    <blockquote className="review__quote">
                      <p className="review__text">It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.</p>

                      <footer className="review__details">
                        <cite className="review__author">Paula Fleri-Soler</cite>
                        <time className="review__date" dateTime="2016-12-20">December 20, 2016</time>
                      </footer>
                    </blockquote>

                    <div className="review__rating">7,0</div>
                  </div>
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

export default MovieReviewPage;
