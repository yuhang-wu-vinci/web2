import { useNavigate, useOutletContext } from "react-router-dom";
import { MovieContext } from "../../types";
import PageTitle from "../PageTitle";

const HomePage = () => {7
  const {
    movies
  }: MovieContext = useOutletContext();

  const navigate = useNavigate();
  return (
    <div>
      <PageTitle title="myMovies" />
      <p>Welcome to myMovies, a site where you can find info about cinemas, movies...</p>
      <h2>This is your favorite movies</h2>
      <ul>
        {movies.map((movie)=>(
          <li key= {movie.id} onClick={() => navigate(`/movies/${movie.id}`)}>{movie.title }</li>
        ))}

      </ul>

    </div>
  );
};
export default HomePage;
