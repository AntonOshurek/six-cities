import { Route, Routes, BrowserRouter } from 'react-router-dom';

import MainPage from '../../pages/main-page';
import MyList from '../../pages/my-list';


type FilmCardObject = {
  bg: string,
  poster: string,
  title: string,
  genre: string,
  year: number,
};

type AppProps = {
  filmCard: FilmCardObject,
}

function App({filmCard}: AppProps): JSX.Element {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage filmCard={filmCard}/> } />
        <Route path='/mylist' element={<MyList/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
