import { GENRES } from '../../../consts/consts';

function CatalogGenresList(): JSX.Element {

  const renderItems = (genresArr:string[]): object => {
    const result = genresArr.map((item) => (
      <li className="catalog__genres-item catalog__genres-item--active" key={item + 1}>
        <a href="test" className="catalog__genres-link">{item}</a>
      </li>
    ));
    return result;
  };

  const genreItems: object = renderItems(GENRES);

  return (
    <ul className="catalog__genres-list">
      {genreItems}
    </ul>
  );
}

export default CatalogGenresList;
