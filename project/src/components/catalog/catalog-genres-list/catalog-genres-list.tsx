import { Link } from 'react-router-dom';
//REDUX
import { connect, ConnectedProps } from 'react-redux';
import { setRenderedFilmsCount as RFC } from '../../../store/actions/actions';
import { bindActionCreators, Dispatch } from 'redux';
//TYPES
import { Actions } from '../../../types/actions-types';

import { FILMS_COUNT_PER_STEP, GENRES } from '../../../consts/consts';

function CatalogGenresList({setRenderedFilmsCount}: ConnectedComponentProps): JSX.Element {

  const renderItems = (genresArr:string[]): object => {
    const result = genresArr.map((item) => (
      <li className="catalog__genres-item catalog__genres-item--active" key={item + 1}>
        <Link to={`/${item}`} className="catalog__genres-link"
          onClick={() => setRenderedFilmsCount(FILMS_COUNT_PER_STEP)}
        >
          {item}
        </Link>
      </li>
    ));
    return result;
  };

  const genreItems: object = renderItems(GENRES);

  return (
    <ul className="catalog__genres-list">
      {genreItems}
    </ul>
  );
}

//STORE
type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux;

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => bindActionCreators({
  setRenderedFilmsCount: RFC,
}, dispatch);

const connector = connect(null, mapDispatchToProps);

export {CatalogGenresList};
export default connector(CatalogGenresList);
