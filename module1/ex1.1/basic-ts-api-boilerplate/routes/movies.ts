import { Router } from "express";
import  {Movie } from "../types";

const router = Router();

const movies: Movie[] = [
  {
    id: 1,
    title: "le film 1",
    director: "Damas",
    duration: 133,
    budget: 0,
  },
  {
    id: 2,
    title: "le film 2",
    director: "Damas",
    duration: 133,
    description: "le meilleur film",
  },
];

router.get("/", (_req, res) => {
    return res.json(movies);
});

router.get("/:id", (req, res) => {
    const id = Number(req.params.id);
    const movie = movies.find((movie)=> movie.id === id);
    if(!movie){
        return res.sendStatus(404);
    }
    return res.json(movie);
});

export default router;
