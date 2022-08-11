import Catalog from '../../catalog/catalog';
import PageFooter from '../../default-components/page-footer/page-footer';

import type { FilmItem } from '../../../types/film-types';

type MainPageContentProps = {
  allFilms: FilmItem[],
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
