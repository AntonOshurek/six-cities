import CatalogGenresList from './catalog-genres-list/catalog-genres-list';
import CatalogFilmList from './catalog-films-list/catalog-films-list';
import CatalogMoreButton from './catalog-more-button/catalog-more-button';

import type { FilmItem } from '../../types/film-types';

type CatalogProps = {
  allFilms: FilmItem[],
}

function Catalog({ allFilms }: CatalogProps): JSX.Element {
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <CatalogGenresList />
      <CatalogFilmList films={allFilms} />
      <CatalogMoreButton />
    </section>
  );

}

export default Catalog;
