import FilmCard from '../components/film-card/film-card';
import PageContent from '../components/page-content/page-content';

type FilmCardObject = {
  bg: string,
  poster: string,
  title: string,
  genre: string,
  year: number,
};

type MainPageProps = {
  filmCard: FilmCardObject,
}

function MainPage({filmCard}: MainPageProps): JSX.Element {
  return (
    <>
      <FilmCard filmCard={filmCard}/>
      <PageContent/>
    </>
  );
}

export default MainPage;
