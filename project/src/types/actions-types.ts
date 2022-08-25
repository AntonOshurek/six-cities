import type { FilmItem } from '../types/film-types';
import { AuthorizationStatus } from '../consts/consts';

import { ThunkAction, ThunkDispatch } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { State } from './state-types';

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

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, LoadFilms>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;

//enumeration of all action types
export type Actions = SetAllFilms |
SetRenderedFilmsCount |
LoadFilms |
RequireAuthorization |
RequireLogout;
