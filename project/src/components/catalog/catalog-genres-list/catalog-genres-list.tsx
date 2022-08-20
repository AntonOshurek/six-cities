import { NavLink } from 'react-router-dom';
//REDUX
import { connect, ConnectedProps } from 'react-redux';
import { setRenderedFilmsCount as RFC } from '../../../store/actions/actions';
import { bindActionCreators, Dispatch } from 'redux';
//TYPES
import { Actions } from '../../../types/actions-types';
//CONSTANTS
import { FILMS_COUNT_PER_STEP, genreFilters } from '../../../consts/consts';

function CatalogGenresList({setRenderedFilmsCount}: ConnectedComponentProps): JSX.Element {

  type SetActiveLink = {
    isActive: boolean,
  }

  const setActiveLink = ({isActive}: SetActiveLink) => isActive ? 'catalog__genres-link catalog__genres-link--active' : 'catalog__genres-link';

  const renderFilters = (): object => {
    const content = [];
    for (const filterId in genreFilters) {
      const item = genreFilters[filterId];
      content.push(
        <li className="catalog__genres-item" key={item.key}>
          <NavLink to={`/${item.route}`} className={setActiveLink}
            onClick={() => setRenderedFilmsCount(FILMS_COUNT_PER_STEP)}
          >
            {item.name}
          </NavLink>
        </li>,
      );
    }
    return content;
  };


  return (
    <ul className="catalog__genres-list">
      {renderFilters()}
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
