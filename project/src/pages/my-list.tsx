import UserBlock from '../components/user-block/user-block';
import PageFooter from '../components/page-footer/page-footer';
import CatalogFilmList from '../components/catalog-films-list/catalogFilmsList';

import { myFilms } from '../data/films-data';

function MyList():JSX.Element {

  return(
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <a href="main.html" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

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
