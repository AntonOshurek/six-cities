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
//CONSTANTS
import { sortingNames } from '../../consts/consts';

const sorting = (filmsArray: FilmItem[], sortType: string): FilmItem[] => {
  let foo: FilmItem[] = [];
  switch(sortType) {
    case sortingNames.All:
      foo = filmsArray.filter((film) => film);
      break;
    case sortingNames.Comedies:
      foo = filmsArray.filter((film) => film.genre === 'Comedy');
      break;
    case sortingNames.Romance:
      foo = filmsArray.filter((film) => film.genre === 'Romance');
      break;
    default:
      foo = filmsArray;
  }
  return foo;
};


function Catalog({ allFilms, renderedFilmsCount }: ConnectedComponentProps): JSX.Element {
  const params = useParams();
  const sortType = params.sort;

  let filtredFilms: FilmItem[] = [];

  if(sortType) {
    filtredFilms = sorting(allFilms, sortType);
  } else {
    filtredFilms = allFilms;
  }

  const firstRenderFilms: FilmItem[] = filtredFilms.slice(0, Math.min(filtredFilms.length, renderedFilmsCount));

  const showMoreButton: boolean = renderedFilmsCount >= filtredFilms.length;

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
