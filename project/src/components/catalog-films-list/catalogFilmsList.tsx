import type { Film } from '../../data/films-data';

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
          <a className="small-film-card__link" href="film-page.html">{item.title}</a>
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
