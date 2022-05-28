import Header from '../header/header';
import FilmCardBg from '../film-card-bg/film-card-bg';
import FilmCardInfo from '../film-card-info/film-card-info';

type FilmCardObject = {
  bg: string,
  poster: string,
  title: string,
  genre: string,
  year: number,
};

type FilmCardProps = {
  filmCard: FilmCardObject,
}

function FilmCard({filmCard}: FilmCardProps): JSX.Element {
  return (
    <section className="film-card">

      <FilmCardBg background={filmCard.bg}/>

      <h1 className="visually-hidden">WTW</h1>

      <Header/>

      <div className="film-card__wrap">
        <FilmCardInfo filmCard={filmCard}/>
      </div>
    </section>
  );
}

export default FilmCard;
