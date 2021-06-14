import { useState } from 'react'
import AddGamePage from './pages/AddGamePage'

function App() {
  const [games, setGames] = useState([])
  return (
    <div>
      <AddGamePage games={games} onSubmit={handleGamename} />
    </div>
  )

  function handleGamename(name) {
    setGames([...games, name])
  }
}

export default App
