import type { FilmItem } from '../../types/film-types';
import type { GetAllFilms } from '../../types/actions-types';
import { ActionTypes } from '../../types/actions-types';

export const getAllFilms = (films: FilmItem[]): GetAllFilms => ({
  type: ActionTypes.getFilms,
  payload: films,
});
