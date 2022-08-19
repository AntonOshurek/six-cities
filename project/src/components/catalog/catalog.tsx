//COMPONENTS
import CatalogGenresList from './catalog-genres-list/catalog-genres-list';
import CatalogFilmList from './catalog-films-list/catalog-films-list';
import CatalogMoreButton from './catalog-more-button/catalog-more-button';
//REDUX
import { connect, ConnectedProps } from 'react-redux';
//CONSTANTS
// import { FILMS_COUNT_PER_STEP } from '../../consts/consts';
// import { CatalogMoreButtonStatus } from '../../consts/consts';
//TYPES
import { FilmItem } from '../../types/film-types';
import { State } from '../../types/state-types';


function Catalog({ allFilms, renderedFilmsCount }: ConnectedComponentProps): JSX.Element {
  const firstRenderFilms: FilmItem[] = allFilms.slice(0, Math.min(allFilms.length, renderedFilmsCount));

  const showMoreButton: boolean = renderedFilmsCount >= allFilms.length;

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <CatalogGenresList />
      <CatalogFilmList films={firstRenderFilms} />
      {showMoreButton ? null : <CatalogMoreButton />}
    </section>
  );
}

//STORE
type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux;

const mapStateToProps = ({allFilms, renderedFilmsCount}: State) => ({
  allFilms,
  renderedFilmsCount,
});

const connector = connect(mapStateToProps);

export {Catalog};
export default connector(Catalog);
