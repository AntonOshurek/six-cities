import { Link } from 'react-router-dom';
// import { AppRoute } from '../../consts/consts';
import type { Film } from '../../types/film-types';

type CatalogFilmListProps = {
  films: Film[],
}

function CatalogFilmList({films}:CatalogFilmListProps): JSX.Element {

  function renderItems (filmsItems:Film[]): object {
    const result = filmsItems.map((item) => (
      <article className="small-film-card catalog__films-card" key={item.key}>
        <div className="small-film-card__image">
          <img src={item.img} alt={item.title} width="280" height="175" />
        </div>
        <h3 className="small-film-card__title">
          <Link className="small-film-card__link" to={`/films/${item.key}`}>{item.title}</Link>
        </h3>
      </article>
    ));
    return result;
  }

  const filmItems = renderItems(films);

  return (
    <div className="catalog__films-list">
      {filmItems}
    </div>
  );
}

export default CatalogFilmList;
