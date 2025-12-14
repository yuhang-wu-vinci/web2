import { useOutletContext } from "react-router-dom"
import { MovieContext } from "../../types"
import AddMovieForm from "../Movie/AddMovieForm";

const AddMoviePage= ()=>{
    const{
        onMovieAdded,
    }: MovieContext = useOutletContext();
    
    return(
        <AddMovieForm onMovieAdded={onMovieAdded} />
    )
}
export default AddMoviePage