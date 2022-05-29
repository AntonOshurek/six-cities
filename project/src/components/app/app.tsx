import { Route, Routes, BrowserRouter } from 'react-router-dom';

import MainPage from '../../pages/main-page';
import MyList from '../../pages/my-list';
import Login from '../../pages/login';

import { FilmCardData } from '../../types/film-card-types';

type AppProps = {
  filmCard: FilmCardData,
}

function App({filmCard}: AppProps): JSX.Element {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage filmCard={filmCard}/> } />
        <Route path='/mylist' element={<MyList/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
