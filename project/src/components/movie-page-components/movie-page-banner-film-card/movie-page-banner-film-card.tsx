import { Link } from 'react-router-dom';

import Header from '../../default-components/header/header';

import type { FilmItem } from '../../../types/film-types';

type MoviePageBannerFilmCardProps = {
  filmCardData: FilmItem,
  filmId: string,
}

function MoviePageBannerFilmCard({filmCardData, filmId}: MoviePageBannerFilmCardProps): JSX.Element {

  return(
    <div className="film-card__hero">
      <div className="film-card__bg">
        <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header />

      <div className="film-card__wrap">
        <div className="film-card__desc">
          <h2 className="film-card__title">{filmCardData.name}</h2>
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
            <Link to={`/films/${filmId}/add-review`} className="btn film-card__button">Add review</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviePageBannerFilmCard;
