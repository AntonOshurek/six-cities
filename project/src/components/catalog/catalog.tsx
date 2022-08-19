//COMPONENTS
import CatalogGenresList from './catalog-genres-list/catalog-genres-list';
import CatalogFilmList from './catalog-films-list/catalog-films-list';
import CatalogMoreButton from './catalog-more-button/catalog-more-button';
//REDUX
import { connect, ConnectedProps } from 'react-redux';
import { State } from '../../types/state-types';
//CONSTANTS
import { renderedFilmsCount } from '../../consts/consts';
//TYPES
import { FilmItem } from '../../types/film-types';

const mapStateToProps = ({allFilms, catalogMoreButton}: State) => ({
  allFilms,
  catalogMoreButton,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux;

function Catalog({ allFilms, catalogMoreButton }: ConnectedComponentProps): JSX.Element {
  const firstRenderFilms: FilmItem[] = allFilms.slice(0, Math.min(allFilms.length, renderedFilmsCount));

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <CatalogGenresList />
      <CatalogFilmList films={firstRenderFilms} />
      {catalogMoreButton ? <CatalogMoreButton /> : null}
    </section>
  );
}

export {Catalog};
export default connector(Catalog);
