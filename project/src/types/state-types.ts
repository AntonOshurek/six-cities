import { FilmItem } from './film-types';
import { AuthorizationStatus } from '../consts/consts';

export type State = {
  allFilms: FilmItem[],
  renderedFilmsCount: number,
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
};
