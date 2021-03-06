export enum AppRoute {
  ROOT = '/',
  MY_LIST = '/mylist',
  LOGIN = '/login',
  MOVIE_PAGE = '/films/:id',
  MOVIE_REVIE_PAGE = '/films/:id/review',
  PLAYER = '/player/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
