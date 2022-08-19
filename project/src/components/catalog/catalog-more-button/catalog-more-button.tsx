//REDUX
import { connect, ConnectedProps } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { setRenderedFilmsCount as RFC } from '../../../store/actions/actions';
//TYPES
import { Actions } from '../../../types/actions-types';
import { State } from '../../../types/state-types';
//CONSTANTS
import { FILMS_COUNT_PER_STEP } from '../../../consts/consts';

function CatalogMoreButton({setRenderedFilmsCount, renderedFilmsCount}: ConnectedComponentProps): JSX.Element {

  const countingRenderedFilms = (): void => {
    const newCount: number = renderedFilmsCount + FILMS_COUNT_PER_STEP;
    setRenderedFilmsCount(newCount);
  };

  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={countingRenderedFilms}
      >
        Show more
      </button>
    </div>
  );
}

//STORE
type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux;

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => bindActionCreators({
  setRenderedFilmsCount: RFC,
}, dispatch);

const mapStateToProps = ({renderedFilmsCount}: State) => ({
  renderedFilmsCount,
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export {CatalogMoreButton};
export default connector(CatalogMoreButton);
