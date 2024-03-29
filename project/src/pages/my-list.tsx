import UserBlock from '../components/default-components/user-block/user-block';
import PageFooter from '../components/default-components/page-footer/page-footer';
import CatalogFilmList from '../components/catalog/catalog-films-list/catalog-films-list';
import Logo from '../components/default-components/logo/logo';

import { myFilms } from '../data/films-data';

function MyList():JSX.Element {

  return(
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">My list</h1>
        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <CatalogFilmList films={myFilms}/>
      </section>

      <PageFooter />
    </div>
  );
}

export default MyList;
