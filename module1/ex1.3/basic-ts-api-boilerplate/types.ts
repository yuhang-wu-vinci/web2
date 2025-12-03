interface Pizza {
  id: number;
  title: string;
  content: string;
}

interface PizzaToUpdate {
  title?: string;
  content?: string;
}


type NewPizza = Omit<Pizza, "id">;

interface Movie{
  id: number;
  title : string;
  director: string;
  duration: number;

  budget ?: number;
  description?: string;
  imageURL?: string;
}

interface MovieToUpdate{
  title ?: string;
  director?: string;
  duration?: number;
  budget ?: number;
  description?: string;
  imageURL?: string;
}
type NewMovie = Omit<Movie, "id">;

export type { Pizza, NewPizza, PizzaToUpdate,Movie, MovieToUpdate, NewMovie };
