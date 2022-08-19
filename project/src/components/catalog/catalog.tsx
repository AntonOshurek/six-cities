//COMPONENTS
import CatalogGenresList from './catalog-genres-list/catalog-genres-list';
import CatalogFilmList from './catalog-films-list/catalog-films-list';
import CatalogMoreButton from './catalog-more-button/catalog-more-button';
//REDUX
import { connect, ConnectedProps } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { showCatalogMoreButton } from '../../store/actions/actions';
//CONSTANTS
import { renderedFilmsCount } from '../../consts/consts';
//TYPES
import { FilmItem } from '../../types/film-types';
import { State } from '../../types/state-types';
import { Actions } from '../../types/actions-types';


function Catalog({ allFilms, catalogMoreButton, showMoreButton }: ConnectedComponentProps): JSX.Element {
  const firstRenderFilms: FilmItem[] = allFilms.slice(0, Math.min(allFilms.length, renderedFilmsCount));
  //for first launch
  if(allFilms.length > renderedFilmsCount) {
    showMoreButton(true);
  }

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <CatalogGenresList />
      <CatalogFilmList films={firstRenderFilms} />
      {catalogMoreButton ? <CatalogMoreButton /> : null}
    </section>
  );
}

//STORE
type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux;

const mapStateToProps = ({allFilms, catalogMoreButton}: State) => ({
  allFilms,
  catalogMoreButton,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => bindActionCreators({
  showMoreButton: showCatalogMoreButton,
}, dispatch);

const connector = connect(mapStateToProps, mapDispatchToProps);

export {Catalog};
export default connector(Catalog);
