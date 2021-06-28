import styled from 'styled-components/macro'
import RemoveButton from '../components/RemoveButton'
import Search from '../components/Search'

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
  margin-top: -24px;

  img {
    max-width: 118px;
    padding: 5px;
    position: fixed;
    background: transparent;
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
  padding: 0;
  list-style: none;
  gap: 20px;
  font-size: 1.8rem;
  margin-top: 113px;
  z-index: 1;
`

const ListItem = styled.li`
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
