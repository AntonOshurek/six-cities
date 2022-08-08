import { Link } from 'react-router-dom';

import type { Film } from '../../types/film-types';

type SmallFilmCardProps = {
  filmItem: Film,
}

function SmallFilmCard({filmItem}: SmallFilmCardProps):JSX.Element {

  return(
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={filmItem.img} alt={filmItem.title} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${filmItem.key}`}>{filmItem.title}</Link>
      </h3>
    </article>
  );
}

export default SmallFilmCard;
