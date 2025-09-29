import { Router } from "express";

import path from "node:path";
import { NewFilm, Film, FilmToUpdate } from "../types";
import { serialize, parse } from "../utils/json";

const router = Router();

const jsonDbPath = path.join(__dirname, "/../data/films.json");

const defaultFilms: Film[] = [
  {
    id: 1,
    title: "Inception",
    director: "Christopher Nolan",
    duration: 148,
    budget: 160000000,
    description: "A thief who steals corporate secrets through the use of dream-sharing technology.",
    imageUrl: "https://example.com/inception.jpg",
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    duration: 175,
    budget: 6000000,
    description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    imageUrl: "https://example.com/godfather.jpg",
  },
  {
    id: 3,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    duration: 154,
    budget: 8000000,
    description: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    imageUrl: "https://example.com/pulpfiction.jpg",
  }
];

/* Read all the pizzas from the menu
   GET /pizzas?order=title : ascending order by title
   GET /pizzas?order=-title : descending order by title
*/
router.get("/", (req, res) => {
  if (req.query.order && typeof req.query.order !== "string") {
    return res.sendStatus(400);
  }

  const orderByTitle =
    typeof req.query.order === "string" && req.query.order.includes("title")
      ? req.query.order
      : undefined;

  let orderedMenu: Film[] = [];
  const films = parse(jsonDbPath, defaultFilms);
  if (orderByTitle)
    orderedMenu = [...films].sort((a, b) => a.title.localeCompare(b.title));

  if (orderByTitle === "-title") orderedMenu = orderedMenu.reverse();

  return res.json(orderedMenu.length === 0 ? films : orderedMenu);
});

// Read the film identified by an id in the menu
router.get("/:id", (req, res) => {
  const films = parse(jsonDbPath, defaultFilms);
  const idInRequest = parseInt(req.params.id, 10);
  const indexOfFilmFound = films.findIndex(
    (film: Film) => film.id === idInRequest
  );

  if (indexOfFilmFound < 0) return res.sendStatus(404);

  return res.json(films[indexOfFilmFound]);
});

// Create a film to be added to the menu.
router.post("/", (req, res) => {
  const body: unknown = req.body;
  if (
    !body ||
    typeof body !== "object" ||
    !("title" in body) ||
    !("content" in body) ||
    typeof body.title !== "string" ||
    typeof body.content !== "string" ||
    !body.title.trim() ||
    !body.content.trim()
  ) {
    return res.sendStatus(400);
  }

  const { title, director, duration, budget, description, imageUrl } = body as unknown as NewFilm;

  const films = parse(jsonDbPath, defaultFilms);
  // Use reduce() to find the highest id in the films array
  const nextId =
    films.reduce((maxId, film) => (film.id > maxId ? film.id : maxId), 0) +
    1; // 0 is the initial value of maxId

  const addedFilm: Film = {
    id: nextId,
    title,
    director,
    duration,
    budget,
    description,
    imageUrl,
  };

  films.push(addedFilm);

  serialize(jsonDbPath, films);

  return res.json(addedFilm);
});

// Delete a film from the menu based on its id
router.delete("/:id", (req, res) => {
  const films = parse(jsonDbPath, defaultFilms);
  console.log("delete operation requested on ", films);
  const idInRequest = parseInt(req.params.id, 10);
  const foundIndex = films.findIndex((film) => film.id === idInRequest);

  if (foundIndex < 0) return res.sendStatus(404);

  const itemsRemovedFromMenu = films.splice(foundIndex, 1);
  const itemRemoved = itemsRemovedFromMenu[0];

  serialize(jsonDbPath, films);

  return res.json(itemRemoved);
});

// Update a film based on its id and new values for its parameters
router.patch("/:id", (req, res) => {
  const body: unknown = req.body;
  if (
    !body ||
    typeof body !== "object" ||
    ("title" in body &&
      (typeof body.title !== "string" || !body.title.trim())) ||
    ("content" in body &&
      (typeof body.content !== "string" || !body.content.trim()))
  ) {
    return res.sendStatus(400);
  }

  const filmToUpdate: FilmToUpdate = body;

  const films = parse(jsonDbPath, defaultFilms);
  const idInRequest = parseInt(req.params.id, 10);
  const foundIndex = films.findIndex((film) => film.id === idInRequest);

  if (foundIndex < 0) return res.sendStatus(404);

  const updatedFilm: Film = { ...films[foundIndex], ...filmToUpdate };

  films[foundIndex] = updatedFilm;

  serialize(jsonDbPath, films);

  return res.json(updatedFilm);
});

export default router;
