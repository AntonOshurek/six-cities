import FilmCard from '../film-card/film-card';
import PageContent from '../page-content/page-content';

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
    <>
      <FilmCard filmCard={filmCard}/>
      <PageContent/>
    </>
  );
}

export default App;
