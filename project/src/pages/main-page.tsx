import FilmCard from '../components/film-card/film-card';
import PageContent from '../components/page-content/page-content';

import { FilmCardData } from '../types/film-card-types';

type MainPageProps = {
  filmCard: FilmCardData,
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
