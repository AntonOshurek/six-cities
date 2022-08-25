import { ThunkActionResult } from '../../types/actions-types';

import { APIRoute } from '../../consts/consts';
import { loadFilms } from './actions';

import { FilmItem } from '../../types/film-types';

export const fetchFilmsAction = (): ThunkActionResult =>
  async (dispatch, _getstate, api): Promise<void> => {
    const {data} = await api.get<FilmItem[]>(APIRoute.Films);
    dispatch(loadFilms(data));
  };
