import type { FilmItem } from '../../types/film-types';
import type { SetAllFilms, SetCatalogMoreButtonStatus } from '../../types/actions-types';
import { ActionTypes } from '../../types/actions-types';

export const setAllFilms = (films: FilmItem[]): SetAllFilms => ({
  type: ActionTypes.setFilms,
  payload: films,
});

export const showCatalogMoreButton = (buttonStatus: boolean): SetCatalogMoreButtonStatus => ({
  type: ActionTypes.setCatalogMoreButtonStatus,
  payload: buttonStatus,
});
