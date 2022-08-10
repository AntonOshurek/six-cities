import { Link, useLocation } from 'react-router-dom';

type MoviePageFilmCardNavProps = {
  filmId: string,
}

function MoviePageFilmCardNav({filmId}: MoviePageFilmCardNavProps): JSX.Element {

  const location = useLocation().pathname;

  const isMoviePage = location.match(/\/films\/\d{3,}$/);
  const isDetails = location.match(/\/films\/\d{3,}\/details/);
  const isReview = location.match(/\/films\/\d{3,}\/review/);

  return(
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        <li className={isMoviePage ? 'film-nav__item  film-nav__item--active' : 'film-nav__item'}>
          <Link to={`/films/${filmId}`} className="film-nav__link">Overview</Link>
        </li>
        <li className={isDetails ? 'film-nav__item  film-nav__item--active' : 'film-nav__item'}>
          <Link to={`/films/${filmId}/details`} className="film-nav__link">Details</Link>
        </li>
        <li className={isReview ? 'film-nav__item  film-nav__item--active' : 'film-nav__item'}>
          <Link to={`/films/${filmId}/review`} className="film-nav__link">Reviews</Link>
        </li>
      </ul>
    </nav>
  );
}

export default MoviePageFilmCardNav;
