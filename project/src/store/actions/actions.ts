import type { FilmItem } from '../../types/film-types';
import type { SetAllFilms, SetCatalogMoreButtonStatus, SetRenderedFilmsCount } from '../../types/actions-types';
import { ActionTypes } from '../../types/actions-types';

export const setAllFilms = (films: FilmItem[]): SetAllFilms => ({
  type: ActionTypes.setFilms,
  payload: films,
});

export const showCatalogMoreButton = (buttonStatus: string): SetCatalogMoreButtonStatus => ({
  type: ActionTypes.setCatalogMoreButtonStatus,
  payload: buttonStatus,
});

export const setRenderedFilmsCount = (renderedFilmsCount: number): SetRenderedFilmsCount => ({
  type: ActionTypes.setRenderedFilmsCount,
  payload: renderedFilmsCount,
});
