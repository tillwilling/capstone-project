import { useEffect, useState } from 'react'
import AddGamePage from './pages/AddGamePage'
import GameDetails from './pages/GameDetails'
import { setLocalStorage, getLocalStorage } from './utils/localStorage'
import { Route, Switch, useHistory } from 'react-router-dom'

function App() {
  const [games, setGames] = useState(getLocalStorage('games') ?? [])
  const [detailedGame, setDetailedGame] = useState({})

  const { push } = useHistory()
  useEffect(() => {
    setLocalStorage('games', games)
  }, [games])
  return (
    <Switch>
      <Route exact path="/">
        <AddGamePage
          games={games}
          onSubmit={handleSelected}
          onRemove={handleRemove}
          handleShowDetails={handleShowDetails}
        />
      </Route>
      <Route path="/detailview">
        <GameDetails game={detailedGame} />
      </Route>
    </Switch>
  )

  function handleRemove(id) {
    setGames(games.filter(game => game.id !== id))
  }

  function handleShowDetails(game) {
    // update detail game
    setDetailedGame(game)
    // redirect to detail view
    push('/detailview')
  }

  function handleSelected(selectedGame) {
    console.log(selectedGame)
    setGames([...games, selectedGame])
  }
}

export default App
