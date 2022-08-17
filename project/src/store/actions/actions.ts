import type { FilmItem } from '../../types/film-types';
import type { SetAllFilms } from '../../types/actions-types';
import { ActionTypes } from '../../types/actions-types';

export const setAllFilms = (films: FilmItem[]): SetAllFilms => ({
  type: ActionTypes.setFilms,
  payload: films,
});
