import { State } from '../types/state-types';
import { AuthorizationStatus } from '../consts/consts';

import { FILMS_COUNT_PER_STEP } from '../consts/consts';

export const initialState: State = {
  allFilms: [],
  renderedFilmsCount: FILMS_COUNT_PER_STEP,
  authorizationStatus: AuthorizationStatus.Unknown,
};
