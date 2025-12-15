import './App.css'

import { useState } from 'react'
import RandomDog from '../RandomDog/RandomDog'

function App() {
  const [refresh, setRefresh]= useState(false)


  return (
    <>
      <div>
      </div>
      <h1>Vite + React</h1>
      <div>
        <RandomDog key={`${refresh}1`}/>
        <RandomDog key={`${refresh}2`}/>
        <RandomDog key={`${refresh}3`}/>
      </div>
      <div className="card">
        <button onClick={() => setRefresh(!refresh)}>
          Refresh
        </button>
        
      </div>
      

    </>
  )
}

export default App
