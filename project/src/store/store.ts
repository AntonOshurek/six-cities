import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer } from './reducers/reducer';

import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { createAPI } from '../services/api';

const api = createAPI();

export const store = createStore(reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
  ),
);
