import { useEffect, useState } from 'react'
import './App.css'
import type { Joke } from '../../types'

function App() {
  
  const [joke, setJoke] = useState<Joke | null>(null);

  useEffect(() => {
    const interval = setInterval(()=>{


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

    },10000)
    return ()=> clearInterval(interval)
  }, []);



  return (
    <>
      
      <h1>Une bonne blague </h1>
      <h2>{joke?.joke || "La blague arrive ..."}</h2>
    </>
  )
}

export default App
