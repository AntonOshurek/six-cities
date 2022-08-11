import { Link } from 'react-router-dom';

import type { newFilm } from '../../../types/film-types';

type CatalogFilmCardProps = {
  filmItem: newFilm,
}

function CatalogFilmCard({filmItem}: CatalogFilmCardProps):JSX.Element {

  return(
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={filmItem.preview_image} alt={filmItem.name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${filmItem.id}`}>{filmItem.name}</Link>
      </h3>
    </article>
  );
}

export default CatalogFilmCard;
