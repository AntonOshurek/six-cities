import CatalogGenresList from './catalog-genres-list/catalogGenresList';
import CatalogFilmList from './catalog-films-list/catalogFilmsList';
import CatalogMore from './catalog-more/catalogMore';

import type { Film } from '../../types/film-types';

type CatalogProps = {
  allFilms: Film[],
}

function Catalog({ allFilms }: CatalogProps): JSX.Element {
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <CatalogGenresList />
      <CatalogFilmList films={allFilms} />
      <CatalogMore />
    </section>
  );

}

export default Catalog;
