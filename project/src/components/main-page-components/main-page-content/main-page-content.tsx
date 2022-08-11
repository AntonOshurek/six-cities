import Catalog from '../../catalog/catalog';
import PageFooter from '../../default-components/page-footer/page-footer';

import type { Film } from '../../../types/film-types';

type MainPageContentProps = {
  allFilms: Film[],
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
