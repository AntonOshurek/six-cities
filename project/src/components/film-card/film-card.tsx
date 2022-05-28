import Header from '../header/header';
import FilmCardBg from '../film-card-bg/film-card-bg';
import FilmCardInfo from '../film-card-info/film-card-info';

function FilmCard(): JSX.Element {

  return (
    <section className="film-card">

      <FilmCardBg/>

      <h1 className="visually-hidden">WTW</h1>

      <Header/>

      <div className="film-card__wrap">
        <FilmCardInfo/>
      </div>
    </section>
  );
}

export default FilmCard;
