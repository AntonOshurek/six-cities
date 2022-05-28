function CatalogGenresList(): JSX.Element {

  const genres:string[] = ['All genres', 'Comedies', 'Crime', 'Documentary', 'Dramas', 'Horror', 'Kids & Family', 'Romance', 'Sci-Fi', 'Thrillers'];

  function renderItems (genresArr:string[]): object {
    const result = genresArr.map((item) => (
      <li className="catalog__genres-item catalog__genres-item--active" key={item + 1}>
        <a href="test" className="catalog__genres-link">{item}</a>
      </li>
    ));
    return result;
  }

  const items = renderItems(genres);

  return(
    <ul className="catalog__genres-list">
      {items}
    </ul>
  );
}

export default CatalogGenresList;
