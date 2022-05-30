import { Route, Routes, BrowserRouter } from 'react-router-dom';

import MainPage from '../../pages/main-page';
import MyList from '../../pages/my-list';
import Login from '../../pages/login';
import MoviePage from '../../pages/movie-page';
import MovieReviewPage from '../../pages/movie-review-page';
import Player from '../../pages/player';

import { FilmCardData } from '../../types/film-card-types';
import { AppRoute, AuthorizationStatus } from '../../consts/consts';

type AppProps = {
  filmCard: FilmCardData,
}

function App({filmCard}: AppProps): JSX.Element {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.ROOT} element={<MainPage filmCard={filmCard}/> } />
        <Route path='/mylist' element={<MyList/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/films/:id' element={<MoviePage/>} />
        <Route path='/films/:id/review' element={<MovieReviewPage/>} />
        <Route path='/player/:id' element={<Player/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
