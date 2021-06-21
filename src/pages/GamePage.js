import styled from 'styled-components/macro'
import React from 'react'
import { deepEqual } from 'assert'
import Button from '../components/Button'

const GamesArr = [
  'Apex Legends',
  'Green Hell',
  'Grounded',
  'Stranded Deep',
  'Valheim',
]

export default function GamePage() {
  return (
    <GameList>
      <List>
        {GamesArr.map(name => (
          <li>{name}</li>
        ))}
      </List>
      <Button>Add a game</Button>
    </GameList>
  )
}

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

const GameList = styled.div`
  display: grid;
  justify-items: center;
`
