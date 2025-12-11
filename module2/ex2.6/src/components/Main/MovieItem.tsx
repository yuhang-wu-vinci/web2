import { useState } from "react"
import { Movie } from "../../types"


const MovieItem = (props:Movie)=>{
    const [clicked, setClicked] = useState(false)


    return(
        <div onClick={()=>setClicked(!clicked)}>
            <h1>{props.title}</h1>
            <h2>the director is {props.director}</h2>
            {clicked ? <p>description : {props.description}</p> : null}
        </div>
    )
}
export default MovieItem