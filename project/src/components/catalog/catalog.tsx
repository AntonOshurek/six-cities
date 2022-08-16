import CatalogGenresList from './catalog-genres-list/catalog-genres-list';
import CatalogFilmList from './catalog-films-list/catalog-films-list';
import CatalogMoreButton from './catalog-more-button/catalog-more-button';

import type { FilmItem } from '../../types/film-types';

//REDUX
// import {Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import { State } from '../../types/state-types';

const mapStateToProps = (state: State) => ({
  fooAllFilms: state.allFilms,
});

const connector = connect(mapStateToProps, null);

type CatalogProps = {
  allFilms: FilmItem[],
}

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & CatalogProps;

function Catalog(props: ConnectedComponentProps): JSX.Element {
  const {allFilms, fooAllFilms} = props;
  // eslint-disable-next-line no-console
  console.log(fooAllFilms);

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <CatalogGenresList />
      <CatalogFilmList films={allFilms} />
      <CatalogMoreButton />
    </section>
  );

}

export {Catalog};
export default connector(Catalog);
