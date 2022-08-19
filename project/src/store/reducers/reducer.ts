import { State } from '../../types/state-types';
import { Actions, ActionTypes } from '../../types/actions-types';

import { initialState } from '../initial-state';

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionTypes.setFilms:
      return {...state, allFilms: action.payload};
    case ActionTypes.setCatalogMoreButtonStatus:
      return {...state, catalogMoreButton: action.payload};
    default:
      return state;
  }
};

export { reducer };
