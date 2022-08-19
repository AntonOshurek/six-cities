//COMPONENTS
import CatalogGenresList from './catalog-genres-list/catalog-genres-list';
import CatalogFilmList from './catalog-films-list/catalog-films-list';
import CatalogMoreButton from './catalog-more-button/catalog-more-button';
//REDUX
import { connect, ConnectedProps } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { setCatalogMoreButtonStatus as SCMBS } from '../../store/actions/actions';
//CONSTANTS
// import { FILMS_COUNT_PER_STEP } from '../../consts/consts';
import { CatalogMoreButtonStatus } from '../../consts/consts';
//TYPES
import { FilmItem } from '../../types/film-types';
import { State } from '../../types/state-types';
import { Actions } from '../../types/actions-types';


function Catalog({ allFilms, catalogMoreButtonStatus, renderedFilmsCount, setCatalogMoreButtonStatus }: ConnectedComponentProps): JSX.Element {
  const firstRenderFilms: FilmItem[] = allFilms.slice(0, Math.min(allFilms.length, renderedFilmsCount));

  if (renderedFilmsCount >= allFilms.length) {
    setCatalogMoreButtonStatus(CatalogMoreButtonStatus.HiddenButton);
  }

  // eslint-disable-next-line no-console
  console.log(`${catalogMoreButtonStatus  } catalogMoreButtonStatus`);

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <CatalogGenresList />
      <CatalogFilmList films={firstRenderFilms} />
      {catalogMoreButtonStatus === CatalogMoreButtonStatus.ShowButton ? <CatalogMoreButton /> : null}
    </section>
  );
}

//STORE
type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux;

const mapStateToProps = ({allFilms, catalogMoreButtonStatus, renderedFilmsCount}: State) => ({
  allFilms,
  catalogMoreButtonStatus,
  renderedFilmsCount,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => bindActionCreators({
  setCatalogMoreButtonStatus: SCMBS,
}, dispatch);

const connector = connect(mapStateToProps, mapDispatchToProps);

export {Catalog};
export default connector(Catalog);
