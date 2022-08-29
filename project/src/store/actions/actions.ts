import type { FilmItem } from '../../types/film-types';
import type { SetAllFilms, SetRenderedFilmsCount, LoadFilms, RequireAuthorization, RequireLogout } from '../../types/actions-types';
import { ActionTypes } from '../../types/actions-types';
import { AuthorizationStatus } from '../../consts/consts';

export const setAllFilms = (films: FilmItem[]): SetAllFilms => ({
  type: ActionTypes.setFilms,
  payload: films,
});

export const setRenderedFilmsCount = (newRenderedFilmsCount: number): SetRenderedFilmsCount => ({
  type: ActionTypes.setRenderedFilmsCount,
  payload: newRenderedFilmsCount,
});

export const loadFilms = (films: FilmItem[]): LoadFilms => ({
  type: ActionTypes.loadFilms,
  payload: films,
});

export const requireAuthorization = (authStatus: AuthorizationStatus): RequireAuthorization => ({
  type: ActionTypes.requireAuthorization,
  payload: authStatus,
});

export const requireLogout = (): RequireLogout => ({
  type: ActionTypes.requireLogout,
});
