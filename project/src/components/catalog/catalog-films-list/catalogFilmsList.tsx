import type { Film } from '../../../types/film-types';

import SmallFilmCard from '../../small-film-card/small-film-card';

type CatalogFilmListProps = {
  films: Film[],
}

function CatalogFilmList({films}:CatalogFilmListProps): JSX.Element {

  const filmCardsItems: object = films.map((item) => (<SmallFilmCard filmItem={item} key={item.key}/>));

  return (
    <div className="catalog__films-list">
      {filmCardsItems}
    </div>
  );
}

export default CatalogFilmList;
