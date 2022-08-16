import type { FilmItem } from '../types/film-types';

export enum ActionTypes {
  getFilms = 'app/getFilms',
}

export type GetAllFilms = {
  type: ActionTypes.getFilms;
  payload: FilmItem[];
};

//enumeration of all action types
export type Actions = GetAllFilms;
