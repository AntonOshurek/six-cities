//COMPONENTS
import CatalogGenresList from './catalog-genres-list/catalog-genres-list';
import CatalogFilmList from './catalog-films-list/catalog-films-list';
import CatalogMoreButton from './catalog-more-button/catalog-more-button';
//ROUTING
import { useParams } from 'react-router-dom';
//REDUX
import { connect, ConnectedProps } from 'react-redux';
//TYPES
import { FilmItem } from '../../types/film-types';
import { State } from '../../types/state-types';
//UTILS
import { filter } from '../../utils/utils';

function Catalog({ allFilms, renderedFilmsCount }: ConnectedComponentProps): JSX.Element {
  const {filterRoute} = useParams();

  //Sorting films
  let filtredFilms: FilmItem[] = [];
  if(filterRoute) {
    filtredFilms = filter(allFilms, filterRoute);
  } else {
    filtredFilms = allFilms;
  }

  const filmsForRender: FilmItem[] = filtredFilms.slice(0, Math.min(filtredFilms.length, renderedFilmsCount));

  const showMoreButton: boolean = renderedFilmsCount >= filtredFilms.length;

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <CatalogGenresList />
      <CatalogFilmList films={filmsForRender} />
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
