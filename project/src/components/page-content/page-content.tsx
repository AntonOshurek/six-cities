import Catalog from '../catalog/catalog';
import PageFooter from '../page-footer/page-footer';

import type { Film } from '../../types/film-types';

type PageContentProps = {
  allFilms: Film[],
}

function PageContent({ allFilms }: PageContentProps): JSX.Element {
  return (
    <div className="page-content">
      <Catalog allFilms={allFilms}/>
      <PageFooter/>
    </div>
  );
}

export default PageContent;
