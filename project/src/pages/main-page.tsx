import MainPageBannerFilmCard from '../components/main-page-components/main-page-banner-film-card/main-page-banner-film-card';
import MainPageContent from '../components/main-page-components/main-page-content/main-page-content';

import type { FilmItem, FilmCardData } from '../types/film-types';
//REDUX
import { bindActionCreators, Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { setAllFilms } from '../store/actions/actions';
import { Actions } from '../types/actions-types';

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => bindActionCreators({
  fooAllFilms: setAllFilms,
}, dispatch);

const connector = connect(null, mapDispatchToProps);

type MainPageProps = {
  filmCard: FilmCardData,
  allFilms: FilmItem[],
}

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & MainPageProps;

function MainPage({ filmCard, allFilms, fooAllFilms }: ConnectedComponentProps): JSX.Element {
  fooAllFilms(allFilms);

  return (
    <>
      <MainPageBannerFilmCard filmCard={filmCard}/>
      <MainPageContent/>
    </>
  );
}

export {MainPage};
export default connector(MainPage);
