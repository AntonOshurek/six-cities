type FilmCardData = {
  bg: string,
  poster: string,
  title: string,
  genre: string,
  year: number,
};

type Film = {
  img: string,
  title: string,
  link: string,
  key: string,
}

type newFilm = {
  'id': number,
  'name': string,
  'postrer_image': string,
  'preview_image': string,
  'background_image': string,
  'background_color': string,
  'video_link': string,
  'preview_video_link': string,
  'description': string,
  'rating': number,
  'scores_count': number,
  'starring': string[],
  'run_time': number,
  'genre': string,
  'released': number,
  'is_favorite': boolean,
}

export type { FilmCardData, Film, newFilm };
