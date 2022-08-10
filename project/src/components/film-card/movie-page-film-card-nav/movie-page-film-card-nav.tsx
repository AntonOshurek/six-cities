import { Link } from 'react-router-dom';

type MoviePageFilmCardNavProps = {
  filmId: string,
}

function MoviePageFilmCardNav({filmId}: MoviePageFilmCardNavProps): JSX.Element {
  // eslint-disable-next-line no-console
  console.log(typeof filmId);
  return(
    <nav className="film-nav film-card__nav">
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
    </nav>
  );
}

export default MoviePageFilmCardNav;
