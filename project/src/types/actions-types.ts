import type { FilmItem } from '../types/film-types';

export enum ActionTypes {
  setFilms = 'app/setFilms',
  setCatalogMoreButtonStatus = 'catalog/moreButtonStatus',
  setRenderedFilmsCount = 'catalog/renderedFilmsCount',
}

export type SetAllFilms = {
  type: ActionTypes.setFilms;
  payload: FilmItem[];
};

export type SetCatalogMoreButtonStatus = {
  type: ActionTypes.setCatalogMoreButtonStatus,
  payload: string,
}

export type SetRenderedFilmsCount = {
  type: ActionTypes.setRenderedFilmsCount,
  payload: number,
}

//enumeration of all action types
export type Actions = SetAllFilms |
SetCatalogMoreButtonStatus |
SetRenderedFilmsCount;
