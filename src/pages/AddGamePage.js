import styled from 'styled-components/macro'
import Button from '../components/Button'

export default function AddGamePage({ onSubmit, games }) {
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Label>
          Enter game name:
          <input
            name="gamename"
            type="text"
            required
            placeholder="e.g. Apex Legends"
          />
        </Label>
        <List>
          {games.map(name => (
            <li>{name}</li>
          ))}
        </List>
        <Button>Add game</Button>
      </Form>
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

  Label {
    display: grid;
    padding: 40px;
    font-size: 1.4rem;
    line-height: 1.4;
    color: #c3073f;
  }

  input {
    padding: 10px;
    border-radius: 8px;
    border-style: none;
    background-color: whitesmoke;
  }

  input::placeholder {
    opacity: 0.5;
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

const Label = styled.label``
