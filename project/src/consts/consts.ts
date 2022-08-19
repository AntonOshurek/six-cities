export enum AppRoute {
  ROOT = '/',
  ROOT_SORT = '/:sort',
  MY_LIST = '/mylist',
  LOGIN = '/login',
  MOVIE_PAGE = '/films/:filmId',
  MOVIE_PAGE_REVIEW = 'review',
  MOVIE_PAGE_DETAILS = 'details',
  MOVIE_PAGE_ADD_REVIEW = '/films/:filmId/add-review',
  PLAYER = '/player/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum sortingNames {
  All = 'all',
  Comedies = 'Comedies',
  Crime = 'Crime',
  Documentary = 'Documentary',
  Dramas = 'Dramas',
  Horror = 'Horror',
  KidsFamily = 'Kids&Family',
  Romance = 'Romance',
  SciFi = 'Sci-Fi',
  Thrillers = 'Thrillers',
}

export const FILMS_COUNT_PER_STEP = 4;

export const GENRES: string[] = ['All genres', 'Comedies', 'Crime', 'Documentary', 'Dramas', 'Horror', 'Kids & Family', 'Romance', 'Sci-Fi', 'Thrillers'];
