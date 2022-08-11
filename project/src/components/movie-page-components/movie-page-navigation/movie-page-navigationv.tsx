import { NavLink } from 'react-router-dom';
type MoviePageNavigationProps = {
  filmId: string,
}

type Foo = {
  isActive: boolean,
}

function MoviePageNavigation({filmId}: MoviePageNavigationProps): JSX.Element {

  const setActiveLink = ({isActive}: Foo) => isActive ? 'film-nav__link film-nav__link--active' : 'film-nav__link';

  return(
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        <li className='film-nav__item'>
          <NavLink to={`/films/${filmId}`} end className={setActiveLink}>Overview</NavLink>
        </li>
        <li className='film-nav__item'>
          <NavLink to={`/films/${filmId}/details`} className={setActiveLink}>Details</NavLink>
        </li>
        <li className='film-nav__item'>
          <NavLink to={`/films/${filmId}/review`} className={setActiveLink}>Reviews</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MoviePageNavigation;
