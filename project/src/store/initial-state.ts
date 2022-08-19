import { State } from '../types/state-types';

import { FILMS_COUNT_PER_STEP, CatalogMoreButtonStatus } from '../consts/consts';

export const initialState: State = {
  allFilms: [],
  catalogMoreButtonStatus: CatalogMoreButtonStatus.ShowButton,
  renderedFilmsCount: FILMS_COUNT_PER_STEP,
};
