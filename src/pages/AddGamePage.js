import styled from 'styled-components/macro'
import Search from '../components/Search'

//const api_key = process.env.REACT_APP_API_KEY;

export default function AddGamePage({ onSubmit, games }) {
  return (
    <Container>
      <Search onSubmit={onSubmit} />
      <List>
        {games.map(name => (
          <li>{name}</li>
        ))}
      </List>
    </Container>
  )
}

const Container = styled.section`
  display: grid;
  justify-items: center;

  Button {
    border-radius: 8px;
    border-style: none;
    padding: 20px;
    margin: 20px;
    width: 300px;
    background-color: #c3073f;
    color: #1a1a1d;
    font-weight: bold;
    font-size: 1.5rem;
  }
`

const List = styled.ul`
  display: grid;
  justify-items: center;
  padding: 0;
  list-style: none;
  gap: 20px;
  font-size: 1.8rem;

  li {
    padding: 20px;
    border-radius: 8px;
    color: whitesmoke;
    width: 300px;
    text-align: center;
    border: ridge whitesmoke;
    background-color: #4056a1;
  }
`
