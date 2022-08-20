import { genreFilters } from '../consts/consts';
import type { FilmItem } from '../types/film-types';

export const filter = (filmsArray: FilmItem[], filterRoute: string): FilmItem[] => {
  let filtersResult: FilmItem[];
  switch(filterRoute) {
    case genreFilters.All.route:
      filtersResult = filmsArray;
      break;
    case genreFilters.Comedies.route:
      filtersResult = filmsArray.filter((film) => film.genre === genreFilters.Comedies.name);
      break;
    case genreFilters.Crime.route:
      filtersResult = filmsArray.filter((film) => film.genre === genreFilters.Crime.name);
      break;
    case genreFilters.Documentary.route:
      filtersResult = filmsArray.filter((film) => film.genre === genreFilters.Documentary.name);
      break;
    case genreFilters.Dramas.route:
      filtersResult = filmsArray.filter((film) => film.genre === genreFilters.Dramas.name);
      break;
    case genreFilters.Horror.route:
      filtersResult = filmsArray.filter((film) => film.genre === genreFilters.Horror.name);
      break;
    case genreFilters.KidsFamily.route:
      filtersResult = filmsArray.filter((film) => film.genre === genreFilters.KidsFamily.name);
      break;
    case genreFilters.Romance.route:
      filtersResult = filmsArray.filter((film) => film.genre === genreFilters.Romance.name);
      break;
    case genreFilters.SciFi.route:
      filtersResult = filmsArray.filter((film) => film.genre === genreFilters.SciFi.name);
      break;
    case genreFilters.Thrillers.route:
      filtersResult = filmsArray.filter((film) => film.genre === genreFilters.Thrillers.name);
      break;
    default:
      filtersResult = filmsArray;
  }
  return filtersResult;
};
