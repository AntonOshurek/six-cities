import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
//REDUX & STATE & STORE
import { Provider } from 'react-redux';
import { store } from './store/store';
//DATA
import { filmCard, allFilms } from './data/films-data';

import {ThunkAppDispatch} from './types/actions-types';
import {checkAuthAction, fetchFilmsAction} from './store/actions/api-actions';

(store.dispatch as ThunkAppDispatch)(checkAuthAction());
(store.dispatch as ThunkAppDispatch)(fetchFilmsAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App filmCard={filmCard} allFilms={allFilms} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));

