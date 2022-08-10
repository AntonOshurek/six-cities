import { Route, Routes, BrowserRouter } from 'react-router-dom';

import MainPage from '../../pages/main-page';
import MyList from '../../pages/my-list';
import Login from '../../pages/login';
import MoviePage from '../../pages/movie-pages/movie-page';
import MovieReviewPage from '../../pages/movie-pages/movie-review-page';
import MovieDetailsPage from '../../pages/movie-pages/movie-details-page';
import Player from '../../pages/player';
import PrivateRoute from '../private-route/PrivateRoute';

import { AppRoute, AuthorizationStatus } from '../../consts/consts';
import type { Film, FilmCardData } from '../../types/film-types';

type AppProps = {
  filmCard: FilmCardData,
  allFilms: Film[],
}

function App({filmCard, allFilms}: AppProps): JSX.Element {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.ROOT} element={<MainPage filmCard={filmCard} allFilms={allFilms}/> } />
        <Route path={AppRoute.LOGIN} element={<Login/>} />
        <Route path={AppRoute.MOVIE_PAGE} element={<MoviePage/>} />
        <Route path={AppRoute.MOVIE_REVIEW_PAGE} element={<MovieReviewPage/>} />
        <Route path={AppRoute.MOVIE_DETAILS_PAGE} element={<MovieDetailsPage/>} />
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
