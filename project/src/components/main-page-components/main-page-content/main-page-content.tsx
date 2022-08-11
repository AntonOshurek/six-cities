import Catalog from '../../catalog/catalog';
import PageFooter from '../../default-components/page-footer/page-footer';

import type { newFilm } from '../../../types/film-types';

type MainPageContentProps = {
  allFilms: newFilm[],
}

function MainPageContent({ allFilms }: MainPageContentProps): JSX.Element {
  return (
    <div className="page-content">
      <Catalog allFilms={allFilms}/>
      <PageFooter/>
    </div>
  );
}

export default MainPageContent;
