import { Route, Routes, BrowserRouter } from 'react-router-dom';

// import FilmCard from '../film-card/film-card';
import MainPage from '../pages/main-page';
// import PageContent from '../page-content/page-content';
{/* <PageContent/> */}


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
        <Route path='/' element={<MainPage filmCard={filmCard}/> }>


        </Route>
        <Route>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
