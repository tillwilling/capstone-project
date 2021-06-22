import styled from 'styled-components/macro'
import Search from '../components/Search'

//const api_key = process.env.REACT_APP_API_KEY;

export default function AddGamePage({ onSubmit, games }) {
  return (
    <Container>
      <Search onSubmit={onSubmit} />
      <List>
        {games.map(game => (
          <Li backgroundImage={game.background_image}>{game.name}</Li>
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

  img {
    max-width: 250px;
    border-radius: 8px;
  }
`

const Li = styled.li`
  padding: 20px;
  border-radius: 8px;
  color: whitesmoke;
  width: 300px;
  height: 150px;
  text-align: center;
  text-shadow: 3px 3px 4px rgba(0, 0, 0, 1);
  border: ridge whitesmoke;
  background-image: url(${props => props.backgroundImage});
  background-size: 300px;
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
`
