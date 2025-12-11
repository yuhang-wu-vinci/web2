import type { Film } from "../../../types"
interface FilmCardProps{
    film : Film
}


const FilmCard =({film} : FilmCardProps)=>{
    return(
        <div>
            <h3>Titre : {film.title}</h3>
            <p>director : {film.director}</p>
            <p>duration : {film.duration}</p>
            {film.image != null ? <img src= {film.image} />: null }
            {film.description != null ? <p>{film.description}</p> : null}
            {film.budget != null ? <p>{film.budget}</p> : null}
        </div>
    )
}
export default FilmCard