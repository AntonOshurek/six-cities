import { ThunkActionResult } from '../../types/actions-types';

import { allFilms } from '../../data/films-data';
import { APIRoute } from '../../consts/consts';
import { loadFilms } from './actions';

// export const fetchFilmsAction = (): ThunkActionResult =>
//   async (dispatch, _getstate, api): Promise<void> => {
//     const {data} = await api.get<typeof allFilms[]>(APIRoute.Films);
//     dispatch(loadFilms(data));
//   };

import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

export const fetchQuestionAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchQuestions',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<typeof allFilms>(APIRoute.Questions);
      dispatch(loadFilms(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);
