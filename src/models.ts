// Types from the REST API
export type TrackModel = {
  id: string;
  title: string;
  authorId: string;
  thumbnail: string;
  length: number;
  modulesCount: number;
};

export type AuthorModel = {
  id: string;
  name: string;
  photo: string;
};

export type FilmModel = {
  id: string;
  title: string;
  people: string[];
};

export type PersonModel = {
  id: string;
  eye_color: string;
  name: string;
  films: string[];
};
