import styled from 'styled-components/macro'
import locations from './data.json'
import LocationsPage from './pages/LocationsPage'

function App() {
  return (
    <AppWrapper>
      <LocationsPage locations={locations} />
    </AppWrapper>
  )
}

export default App

const AppWrapper = styled.div`
  background-color: #f6f6eb;
  height: 100vh;
  width: 100vw;
`
