interface Movie {
  title: string;
  director: string;
  duration: number;
  imageUrl?: string;
  description?: string;
  budget?: number;
}

interface MovieContext {
  onMovieAdded: (newMovie: Movie)=> void
  movies: Movie[]

}


export type { Movie, MovieContext };