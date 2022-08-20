export type SetActiveLink = {
  isActive: boolean,
}

export type GenreFilters = {
  [filterName: string]: {
    readonly 'route': string,
    readonly 'name': string,
    readonly 'key': number,
  };
}
