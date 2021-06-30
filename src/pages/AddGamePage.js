import styled from 'styled-components/macro'
import RemoveButton from '../components/RemoveButton'
import Search from '../components/Search'
import '@fontsource/play'

import Logo from '../images/logo.png'

export default function AddGamePage({
  onSubmit,
  games,
  onRemove,
  handleShowDetails,
}) {
  return (
    <Container>
      <LogoContainer>
        <img src={Logo} alt="" />
      </LogoContainer>
      <Search onSubmit={onSubmit} />
      <List>
        {games.map(game => (
          <ListItem
            backgroundImage={game.background_image}
            key={game.id}
            onClick={() => handleShowDetails(game)}
          >
            {game.name} <RemoveButton onRemove={onRemove} id={game.id} />
          </ListItem>
        ))}
      </List>
      <BottomSpacer />
    </Container>
  )
}

const LogoContainer = styled.div`
  display: grid;
  justify-items: center;
  margin-top: -2px;

  img {
    max-width: 150px;
    padding: 5px;
    position: fixed;
    background: transparent;
    z-index: 5;
  }
`

const Container = styled.section`
  display: grid;
  justify-items: center;
`

const BottomSpacer = styled.div`
  height: 110px;
`

const List = styled.ul`
  display: grid;
  justify-items: center;
  list-style: none;
  gap: 20px;
  font-family: 'Play';
  font-size: 1.4rem;
  margin-top: 130px;
  z-index: 1;
`

const ListItem = styled.li`
  padding: 10px 10px 10px 0;
  border-radius: 8px;
  color: whitesmoke;
  width: 300px;
  height: 159px;
  text-align: center;
  text-shadow: 3px 3px 4px rgba(0, 0, 0, 1);
  background-image: url(${props => props.backgroundImage});
  background-size: 300px;
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
`
