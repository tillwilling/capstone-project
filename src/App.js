import { useEffect, useState } from 'react'
import AddGamePage from './pages/AddGamePage'
import { setLocalStorage, getLocalStorage } from './utils/localStorage'

function App() {
  const [games, setGames] = useState(getLocalStorage('games') ?? [])
  useEffect(() => {
    setLocalStorage('games', games)
  }, [games])
  return (
    <AddGamePage
      games={games}
      onSubmit={handleSelected}
      onRemove={handleRemove}
    />
  )

  function handleRemove(id) {
    setGames(games.filter(game => game.id !== id))
  }

  function handleSelected(selectedGame) {
    setGames([...games, selectedGame])
  }
}

export default App
