import { State } from '../../types/state-types';
import { Actions, ActionTypes } from '../../types/actions-types';
import { AuthorizationStatus } from '../../consts/consts';

import { initialState } from '../initial-state';

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionTypes.setFilms:
      return {...state, allFilms: action.payload};
    case ActionTypes.setRenderedFilmsCount:
      return {...state, renderedFilmsCount: action.payload};
    case ActionTypes.loadFilms:
      return {...state, allFilms: action.payload};
    case ActionTypes.requireAuthorization:
      return {...state, authorizationStatus: action.payload};
    case ActionTypes.requireLogout:
      return {...state, authorizationStatus: AuthorizationStatus.NoAuth};
    default:
      return state;
  }
};

export { reducer };
