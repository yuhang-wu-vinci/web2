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

interface Film {
  id: number;
  title: string;
  director: string;
  duration: number;
  budget: number;
  description: string;
  imageUrl: string;
}

interface FilmToUpdate{
  title?: string;
  description?: string;
  imageUrl?: string;
}

type NewFilm = Omit<Film, "id">;



export type { Pizza, NewPizza, PizzaToUpdate, Film, NewFilm, FilmToUpdate };
