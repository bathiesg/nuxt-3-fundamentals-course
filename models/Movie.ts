export interface Search {
  Search: SearchElement[];
  totalResults: string;
  Response: string;
}

export interface SearchElement {
  Title: string;
  Year: string;
  imdbID: string;
  Type: MovieType;
  Poster: string;
}

export enum MovieType {
  Movie = "movie",
  Series = "series",
}
