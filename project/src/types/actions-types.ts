import type { FilmItem } from '../types/film-types';

export enum ActionTypes {
  setFilms = 'app/setFilms',
  setCatalogMoreButtonStatus = 'catalog/moreButtonStatus',
}

export type SetAllFilms = {
  type: ActionTypes.setFilms;
  payload: FilmItem[];
};

export type SetCatalogMoreButtonStatus = {
  type: ActionTypes.setCatalogMoreButtonStatus,
  payload: boolean,
}

//enumeration of all action types
export type Actions = SetAllFilms | SetCatalogMoreButtonStatus;
