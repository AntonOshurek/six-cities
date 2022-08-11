import MainPageBannerFilmCard from '../components/main-page-components/main-page-banner-film-card/main-page-banner-film-card';
import MainPageContent from '../components/main-page-components/main-page-content/main-page-content';

import type { FilmItem, FilmCardData } from '../types/film-types';

type MainPageProps = {
  filmCard: FilmCardData,
  allFilms: FilmItem[],
}

function MainPage({ filmCard, allFilms }: MainPageProps): JSX.Element {
  return (
    <>
      <MainPageBannerFilmCard filmCard={filmCard}/>
      <MainPageContent allFilms={allFilms}/>
    </>
  );
}

export default MainPage;
