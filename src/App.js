import { useEffect, useState } from 'react'
import AddGamePage from './pages/AddGamePage'
import { setLocalStorage, getLocalStorage } from './utils/localStorage'

function App() {
  const [games, setGames] = useState(getLocalStorage('games') ?? [])
  useEffect(() => {
    setLocalStorage('games', games)
  }, [games])
  return (
    <div>
      <AddGamePage games={games} onSubmit={handleSelected} />
    </div>
  )

  function handleSelected(selectedGame) {
    setGames([...games, selectedGame])
  }
}

export default App
