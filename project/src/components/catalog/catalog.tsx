import CatalogGenresList from './catalog-genres-list/catalog-genres-list';
import CatalogFilmList from './catalog-films-list/catalog-films-list';
import CatalogMoreButton from './catalog-more-button/catalog-more-button';
//REDUX
import { connect, ConnectedProps } from 'react-redux';
import { State } from '../../types/state-types';

const mapStateToProps = ({allFilms}: State) => ({
  allFilms,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux;

function Catalog({ allFilms }: ConnectedComponentProps): JSX.Element {
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
