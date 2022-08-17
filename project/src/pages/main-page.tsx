import MainPageBannerFilmCard from '../components/main-page-components/main-page-banner-film-card/main-page-banner-film-card';
import MainPageContent from '../components/main-page-components/main-page-content/main-page-content';

import type { FilmCardData } from '../types/film-types';

type MainPageProps = {
  filmCard: FilmCardData,
}

function MainPage({ filmCard }: MainPageProps): JSX.Element {
  return (
    <>
      <MainPageBannerFilmCard filmCard={filmCard}/>
      <MainPageContent/>
    </>
  );
}

export default MainPage;
