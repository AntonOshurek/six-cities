import type { FilmItem } from '../../types/film-types';
import type { SetAllFilms, SetCatalogMoreButtonStatus, SetRenderedFilmsCount } from '../../types/actions-types';
import { ActionTypes } from '../../types/actions-types';

export const setAllFilms = (films: FilmItem[]): SetAllFilms => ({
  type: ActionTypes.setFilms,
  payload: films,
});

export const setCatalogMoreButtonStatus = (buttonStatusName: string): SetCatalogMoreButtonStatus => ({
  type: ActionTypes.setCatalogMoreButtonStatus,
  payload: buttonStatusName,
});

export const setRenderedFilmsCount = (newRenderedFilmsCount: number): SetRenderedFilmsCount => ({
  type: ActionTypes.setRenderedFilmsCount,
  payload: newRenderedFilmsCount,
});
