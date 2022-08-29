import { ThunkActionResult } from '../../types/actions-types';

import { APIRoute, AuthorizationStatus } from '../../consts/consts';
import { loadFilms, requireAuthorization, requireLogout } from './actions';

import { FilmItem } from '../../types/film-types';
import { dropToken, saveToken, Token } from '../../services/token';


export const fetchFilmsAction = (): ThunkActionResult =>
  async (dispatch, _getstate, api): Promise<void> => {
    const {data} = await api.get<FilmItem[]>(APIRoute.Films);
    dispatch(loadFilms(data));
  };

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.get(APIRoute.Login)
      .then(() => {
        dispatch(requireAuthorization(AuthorizationStatus.Auth));
      });
  };

export type AuthData = {
  login: string;
  password: string;
}

export const loginAction = ({login: email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data: {token}} = await api.post<{token: Token}>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  };

export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireLogout());
  };
