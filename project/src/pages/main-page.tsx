import FilmCard from '../components/film-card/film-card';
import PageContent from '../components/page-content/page-content';

import type { Film, FilmCardData } from '../types/film-types';

type MainPageProps = {
  filmCard: FilmCardData,
  allFilms: Film[],
}

function MainPage({ filmCard, allFilms }: MainPageProps): JSX.Element {
  return (
    <>
      <FilmCard filmCard={filmCard}/>
      <PageContent allFilms={allFilms}/>
    </>
  );
}

export default MainPage;
