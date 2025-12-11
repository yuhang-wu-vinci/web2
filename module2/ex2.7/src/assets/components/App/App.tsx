import viteLogo from '/vite.svg'
import './App.css'
import type { Film } from '../../../types'
import FilmMenu from '../Main/FilmMenu'
import { useState, type SyntheticEvent } from 'react';

const defaultFilms: Film[] = [
  {
    id: 1,
    title: "Inception",
    director: "Christopher Nolan",
    duration: 148,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR04nMH9dEKDp77a9QpM5SrBvl1ttwRXQaolA&s",
    description: "A thief enters people’s dreams to steal their secrets.",
    budget: 160_000_000
  },
  {
    id: 2,
    title: "The Matrix",
    director: "Lana & Lilly Wachowski",
    duration: 136,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR04nMH9dEKDp77a9QpM5SrBvl1ttwRXQaolA&s",
    description: "A hacker discovers the true nature of his reality.",
    budget: 63_000_000
  },
  {
    id: 3,
    title: "Interstellar",
    director: "Christopher Nolan",
    duration: 169,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR04nMH9dEKDp77a9QpM5SrBvl1ttwRXQaolA&s",
    description: "A team travels through a wormhole to save humanity.",
    budget: 165_000_000
  },
  {
    id: 4,
    title: "Spirited Away",
    director: "Hayao Miyazaki",
    duration: 125,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR04nMH9dEKDp77a9QpM5SrBvl1ttwRXQaolA&s",
    description: "A girl gets trapped in a mysterious spirit world.",
    budget: 19_000_000
  },
  {
    id: 5,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    duration: 154,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR04nMH9dEKDp77a9QpM5SrBvl1ttwRXQaolA&s",
    description: "Interconnected stories of crime in Los Angeles.",
    budget: 8_000_000
  }
];


function App() {
  const [title,setTitle ] = useState("")
  const [director, setDirector] = useState("")
  const [duration, setDuration] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [description, setDescription] = useState("")
  const [budget, setBudget] = useState("")

  const [films, setFilms]= useState(defaultFilms)

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log("submit:", title,director,duration,imageUrl, description,budget);
    const newFilm = {
      id: nextPizzaId(films),
      title: title,
      director: director,
      duration : parseInt(duration),
      image : imageUrl,
      description: description,
      budget : parseInt(budget)
    };
    
    setFilms([...films, newFilm])
  };

  const handleTitleChange = (e: SyntheticEvent) => {
    const titleInput = e.target as HTMLInputElement;
    
    setTitle(titleInput.value);
  };
  const handleDurationChange = (e: SyntheticEvent) => {
    const durationInput = e.target as HTMLInputElement;
    
    setDuration(durationInput.value);


  };const handleDirectorChange = (e: SyntheticEvent) => {
    const directorInput = e.target as HTMLInputElement;
    
    setDirector(directorInput.value);


  };const handleBudgetChange = (e: SyntheticEvent) => {
    const budgetInput = e.target as HTMLInputElement;
    
    setBudget(budgetInput.value);

  };const handleImageUrlChange = (e: SyntheticEvent) => {
    const imageUrlInput = e.target as HTMLInputElement;
    
    setImageUrl(imageUrlInput.value);
  };

  const handleDescriptionChange = (e: SyntheticEvent) => {
    const descriptionInput = e.target as HTMLInputElement;
    setDescription(descriptionInput.value);
  };


  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
        </a>
      </div>

      <h1>Mes films</h1>
      <FilmMenu films={films}></FilmMenu>

      <h1>Ajouter des films</h1>
      <div>
        <br />
        <form onSubmit={handleSubmit}>


          <label htmlFor='title'>Title</label>
          <input
            value={title}
            type="text"
            id="title"
            name="title"
            onChange={handleTitleChange}
            required
          />

          <label htmlFor="director">Director</label>
          <input
            value={director}
            type="text"
            id="director"
            name="director"
            onChange={handleDirectorChange}
            required
          />

          <label htmlFor="budget">Budget</label>
          <input
            value={budget}
            type="text"
            id="budget"
            name="budget"
            onChange={handleBudgetChange}
            required
          />

          <label htmlFor="imageUrl">ImageUrl</label>
          <input
            value={imageUrl}
            type="text"
            id="imageUrl"
            name="imageUrl"
            onChange={handleImageUrlChange}
            required
          />
          <label htmlFor="duration">Duration</label>
          <input
            value={duration}
            type="text"
            id="duration"
            name="duration"
            onChange={handleDurationChange}
            required
          />






          <label htmlFor="description">Description</label>
          <input
            value={description}
            type="text"
            id="description"
            name="description"
            onChange={handleDescriptionChange}
            required
          />


          <button type="submit">Ajouter</button>
        </form>
      </div>

    </>
  )
}

const nextPizzaId = (films: Film[]) => {
  return films.reduce((maxId, film) => Math.max(maxId, film.id), 0) + 1;
};

export default App
