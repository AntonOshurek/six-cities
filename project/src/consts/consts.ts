export enum AppRoute {
  ROOT = '/',
  ROOT_SORT = '/:filterRoute',
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

export const FILMS_COUNT_PER_STEP = 4;

type GenreFilters = {
  [filterName: string]: {
    readonly 'route': string,
    readonly 'name': string,
    readonly 'key': number,
  };
}

export const genreFilters: GenreFilters = {
  'All': {
    'route': '',
    'name': 'All genres',
    'key': 1,
  },
  'Comedies': {
    'route': 'Comedies',
    'name': 'Comedies',
    'key': 2,
  },
  'Crime': {
    'route': 'Crime',
    'name': 'Crime',
    'key': 3,
  },
  'Documentary': {
    'route': 'Documentary',
    'name': 'Documentary',
    'key': 4,
  },
  'Dramas': {
    'route': 'Dramas',
    'name': 'Dramas',
    'key': 5,
  },
  'Horror': {
    'route': 'Horror',
    'name': 'Horror',
    'key': 6,
  },
  'KidsFamily': {
    'route': 'Kids&Family',
    'name': 'Kids & Family',
    'key': 7,
  },
  'Romance': {
    'route': 'Romance',
    'name': 'Romance',
    'key': 8,
  },
  'SciFi': {
    'route': 'Sci-Fi',
    'name': 'Sci-Fi',
    'key': 9,
  },
  'Thrillers': {
    'route': 'Thrillers',
    'name': 'Thrillers',
    'key': 10,
  },
};
