export enum AppRoute {
  ROOT = '/',
  ROOT_SORT = '/:filterType',
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

type Foo = {
  [filterName: string]: {
    [key: string]: string,
  };
}

export const genreFilters: Foo = {
  'All': {
    'rout': 'all',
    'name': 'All genres',
  },
  'Comedies': {
    'rout': 'Comedies',
    'name': 'Comedies',
  },
  'Crime': {
    'rout': 'Crime',
    'name': 'Crime',
  },
  'Documentary': {
    'rout': 'Documentary',
    'name': 'Documentary',
  },
  'Dramas': {
    'rout': 'Dramas',
    'name': 'Dramas',
  },
  'ComeHorrordies': {
    'rout': 'Horror',
    'name': 'Horror',
  },
  'KidsFamily': {
    'rout': 'Kids&Family',
    'name': 'Kids & Family',
  },
  'Romance': {
    'rout': 'Romance',
    'name': 'Romance',
  },
  'SciFi': {
    'rout': 'Sci-Fi',
    'name': 'Sci-Fi',
  },
  'Thrillers': {
    'rout': 'Thrillers',
    'name': 'Thrillers',
  },
};
