import { State } from '../../types/state-types';
import { Actions, ActionTypes } from '../../types/actions-types';

import { initialState } from '../initial-state';

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionTypes.getFilms:
      return {...state, allFilms: action.payload};
    default:
      return state;
  }
};

export { reducer };