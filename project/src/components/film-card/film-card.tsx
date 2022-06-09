import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';

import type { FilmCardData } from '../../types/film-types';

type FilmCardProps = {
  filmCard: FilmCardData,
}

function FilmCard({filmCard}: FilmCardProps): JSX.Element {
  return (
    <section className="film-card">

      <div className="film-card__bg">
        <img src={filmCard.bg} alt="The Grand Budapest Hotel" />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header film-card__head">
        <Logo />
        <UserBlock/>
      </header>

      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src={filmCard.poster} alt={filmCard.title} width="218" height="327" />
          </div>

          <div className="film-card__desc">
            <h2 className="film-card__title">{filmCard.title}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{filmCard.genre}</span>
              <span className="film-card__year">{filmCard.year}</span>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FilmCard;
