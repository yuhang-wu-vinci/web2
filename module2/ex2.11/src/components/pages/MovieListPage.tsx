import AddMovieForm from "../Movie/AddMovieForm";
import MovieListView from "../Movie/MovieListView";
import PageTitle from "../PageTitle";
import { MovieContext } from "../../types";
import { useOutletContext } from "react-router-dom";

const MovieListPage = () => {
  const{
    movies,
    onMovieAdded
  } : MovieContext = useOutletContext()

  return (
    <div>
      <PageTitle title="My favorite movies" />

      <MovieListView movies={movies} />

      <AddMovieForm onMovieAdded={onMovieAdded} />

      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default MovieListPage;
