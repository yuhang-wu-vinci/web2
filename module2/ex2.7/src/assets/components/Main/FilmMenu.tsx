import { type Film } from "../../../types"
import FilmCard from "./FilmCard"

interface FilmMenuProps{
    films : Film[]
}

const FilmMenu =({films} : FilmMenuProps)=>{
    return(
        <div>
            <h2>Film Menu</h2>
            {films.map((film) => (
                <FilmCard film={film} ></FilmCard>
            ))}

        </div>
    )


}
export default FilmMenu