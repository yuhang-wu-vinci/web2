interface Film{
    id : number
    title : string
    director : string
    duration : number
    image ?: string
    description ?: string
    budget ?: number
}

type NewFilm = Omit<Film,"id">
export type{Film,NewFilm}