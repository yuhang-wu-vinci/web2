import { useEffect, useState } from 'react'
import './App.css'
import type { Joke } from '../../types'

function App() {
  const [count, setCount] = useState(0)

  const [joke, setJoke] = useState<Joke | null>(null);

  useEffect(() => {
    fetch("https://v2.jokeapi.dev/joke/Any?type=single")
      .then((response) => {
        if (!response.ok)
          throw new Error(
            `fetch error : ${response.status} : ${response.statusText}`
          );
        return response.json();
      })
      .then((data) => {
        console.log("API Response:", data);
        setJoke(data);
      })
      .catch((err) => {
        console.error("HomePage::error: ", err);
      });
  }, [count]);



  return (
    <>
      
      <h1>Une bonne blague</h1>
      <h2>{joke?.joke || "Cliquez pour charger une blague..."}</h2>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
