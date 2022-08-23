import type { FilmItem } from '../types/film-types';
import { AuthorizationStatus } from '../consts/consts';

export enum ActionTypes {
  setFilms = 'app/setFilms',
  setRenderedFilmsCount = 'catalog/renderedFilmsCount',
  loadFilms = 'data/loadFilms',
  requireAuthorization = 'user/requireAuthorization',
  requireLogout = 'user/requireLogout',
}

export type SetAllFilms = {
  type: ActionTypes.setFilms;
  payload: FilmItem[];
};

export type SetRenderedFilmsCount = {
  type: ActionTypes.setRenderedFilmsCount,
  payload: number,
}

export type LoadFilms = {
  type: ActionTypes.loadFilms,
  payload: FilmItem[],
}

export type RequireAuthorization = {
  type: ActionTypes.requireAuthorization,
  payload: AuthorizationStatus,
}

export type RequireLogout = {
  type: ActionTypes.requireLogout,
}

//enumeration of all action types
export type Actions = SetAllFilms |
SetRenderedFilmsCount |
LoadFilms |
RequireAuthorization |
RequireLogout;
