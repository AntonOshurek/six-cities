import { Route, Routes, BrowserRouter } from 'react-router-dom';

import MainPage from '../../pages/main-page';
import MyList from '../../pages/my-list';
import Login from '../../pages/login';
import MoviePage from '../../pages/movie-page';
import Player from '../../pages/player';
import PrivateRoute from '../private-route/PrivateRoute';
import MoviePageAddReview from '../movie-page-components/movie-page-add-review/movie-page-add-review';
//Movie Page inner pages (outlet)
import MoviePageReview from '../movie-page-components/movie-page-rewiew/movie-page-review';
import MoviePageDetails from '../movie-page-components/movie-page-details/movie-page-details';
import MoviePageOverview from '../movie-page-components/movie-page-overview/movie-page-overview';

import { AppRoute, AuthorizationStatus } from '../../consts/consts';
import { FilmCardData, FilmItem } from '../../types/film-types';

//REDUX
// import { bindActionCreators, Dispatch } from 'redux';
// import { connect, ConnectedProps } from 'react-redux';
// import { setAllFilms } from '../../store/actions/actions';
// import { Actions } from '../../types/actions-types';

// const mapDispatchToProps = (dispatch: Dispatch<Actions>) => bindActionCreators({
//   setFilms: setAllFilms,
// }, dispatch);

// const connector = connect(null, mapDispatchToProps);

type AppProps = {
  filmCard: FilmCardData,
  allFilms: FilmItem[],
}

// type PropsFromRedux = ConnectedProps<typeof connector>;
// type ConnectedComponentProps = PropsFromRedux & AppProps;

function App({filmCard, allFilms}: AppProps): JSX.Element {
  // setFilms(allFilms);
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.ROOT} element={<MainPage filmCard={filmCard}/> } />
        <Route path={AppRoute.ROOT_SORT} element={<MainPage filmCard={filmCard}/> } />
        <Route path={AppRoute.LOGIN} element={<Login/>} />

        <Route path={AppRoute.MOVIE_PAGE} element={<MoviePage/>}>
          <Route index element={<MoviePageOverview/>} />
          <Route path={AppRoute.MOVIE_PAGE_REVIEW} element={<MoviePageReview/>} />
          <Route path={AppRoute.MOVIE_PAGE_DETAILS} element={<MoviePageDetails/>} />
        </Route>

        <Route path={AppRoute.MOVIE_PAGE_ADD_REVIEW} element={<MoviePageAddReview/>} />
        <Route path={AppRoute.PLAYER} element={<Player/>} />

        <Route
          path={AppRoute.MY_LIST}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <MyList/>
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
