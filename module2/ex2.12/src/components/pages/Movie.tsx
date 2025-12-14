import { useMatch, useOutletContext } from "react-router-dom";
import MovieCard from "../Movie/MovieCard"
import { MovieContext } from "../../types";

const Movie=()=>{
    const{
        movies
    }: MovieContext = useOutletContext();
    
    const match = useMatch("/movies/:movieId");
    const movieId = match?.params.movieId;
    if(!movieId) 
        {return <p>Movie not found</p>}
    const movie = movies.find((movie)=> movie.id.toString()=== movieId);
    if(!movie){
        return <p>Movie not found</p>
    }
    return(
        <MovieCard movie={movie}/>

    )
}
export default Movie