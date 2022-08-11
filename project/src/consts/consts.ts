export enum AppRoute {
  ROOT = '/',
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

export const GENRES: string[] = ['All genres', 'Comedies', 'Crime', 'Documentary', 'Dramas', 'Horror', 'Kids & Family', 'Romance', 'Sci-Fi', 'Thrillers'];
