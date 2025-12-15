import './App.css'
import RandomDog from '../RandomDog/RandomDog'

function App() {
  
  return (
    <>
      <div>
      </div>
      <h1>Vite + React</h1>
      <>
      <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
        <RandomDog />
        <RandomDog />
        <RandomDog />
      </div>
    </>
    </>
  )
}

export default App
