type FilmCardBagProps = {
  background: string,
}

function FilmCardBg({background}: FilmCardBagProps): JSX.Element {

  return (
    <div className="film-card__bg">
      <img src={background} alt="The Grand Budapest Hotel" />
    </div>
  );
}

export default FilmCardBg;
