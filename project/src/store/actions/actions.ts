import type { FilmItem } from '../../types/film-types';
import type { SetAllFilms, SetRenderedFilmsCount } from '../../types/actions-types';
import { ActionTypes } from '../../types/actions-types';

export const setAllFilms = (films: FilmItem[]): SetAllFilms => ({
  type: ActionTypes.setFilms,
  payload: films,
});

export const setRenderedFilmsCount = (newRenderedFilmsCount: number): SetRenderedFilmsCount => ({
  type: ActionTypes.setRenderedFilmsCount,
  payload: newRenderedFilmsCount,
});

export const loadFilms = (films: FilmItem[]) => ({
  type: ActionTypes.loadFilms,
  payload: {
    films,
  },
});
