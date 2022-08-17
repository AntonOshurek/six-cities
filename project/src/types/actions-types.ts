import type { FilmItem } from '../types/film-types';

export enum ActionTypes {
  setFilms = 'app/setFilms',
}

export type SetAllFilms = {
  type: ActionTypes.setFilms;
  payload: FilmItem[];
};

//enumeration of all action types
export type Actions = SetAllFilms;
