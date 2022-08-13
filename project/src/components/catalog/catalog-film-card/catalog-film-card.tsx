import { Link } from 'react-router-dom';
import { useState } from 'react';

import TrailerVideo from '../../default-components/trailer-video/trailer-video';

import type { FilmItem } from '../../../types/film-types';

type CatalogFilmCardProps = {
  filmItem: FilmItem,
}

function CatalogFilmCard({filmItem}: CatalogFilmCardProps):JSX.Element {
  const [isActive, setIsActive] = useState<boolean>(false);

  const onActive = (): void => {
    setIsActive(() => true);
  };

  const offActive = (): void => {
    setIsActive(() => false);
  };

  return(
    <article className="small-film-card catalog__films-card"
      onMouseEnter={onActive}
      onMouseLeave={offActive}
    >
      <div className="small-film-card__image">
        {
          isActive ?
            <TrailerVideo videoSrc={filmItem.preview_video_link}/> :
            <img src={filmItem.preview_image} alt={filmItem.name} width="280" height="175" />
        }
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${filmItem.id}`}>{filmItem.name}</Link>
      </h3>
    </article>
  );
}

export default CatalogFilmCard;
