import CatalogGenresList from '../catalog-genres-list/catalogGenresList';
import CatalogFilmList from '../catalog-films-list/catalogFilmsList';
import CatalogMore from '../catalog-more/catalogMore';

import { allFilms } from '../../data/films-data';

function Catalog(): JSX.Element {
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <CatalogGenresList/>
      <CatalogFilmList films={allFilms} />
      <CatalogMore/>
    </section>
  );

}

export default Catalog;
