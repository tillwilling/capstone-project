import styled from 'styled-components/macro'
import Button from '../components/Button'

export default function AddGamePage({ onSubmit, games }) {
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Label>
          Enter game name:
          <input name="gamename" type="text" required />
        </Label>
        <Button>Add game</Button>
      </Form>
      <List>
        {games.map(name => (
          <li>{name}</li>
        ))}
      </List>
    </Container>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const { gamename } = event.target.elements
    onSubmit(gamename.value)
  }
}

const Container = styled.section`
  display: grid;
`

const Form = styled.form`
  display: grid;
  justify-items: center;
  gap: 20px;
`

const List = styled.ul`
  display: grid;
  gap: 20px;
  padding: 0;
  list-style: none;
`

const Label = styled.label`
  display: grid;
`
