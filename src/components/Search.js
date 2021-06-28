import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import Button from './Button'

const API_KEY = process.env.REACT_APP_API_KEY

export default function Search({ onSubmit }) {
  const [options, setOptions] = useState([])
  const [query, setQuery] = useState('')
  const [selectedOption, setSelectedOption] = useState(null)

  useEffect(() => {
    setSelectedOption(null)
    fetch(`https://api.rawg.io/api/games?key=${API_KEY}&search=${query}`)
      .then(res => res.json())
      .then(data => setOptions(data.results))
      .catch(error => console.error(error))
  }, [query])

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <label>
          Type, to search a game
          <input
            autoComplete="off"
            name="gamename"
            id="auto"
            placeholder="Type, to search a game"
            value={selectedOption?.name}
            onChange={event => setQuery(event.target.value)}
            required
          />
        </label>
        <Button>Add game</Button>
        <Suggestions>
          {query &&
            options.map(option => (
              <div onClick={() => setSelectedOption(option)} key={option.id}>
                <span>{option.name}</span>
              </div>
            ))}
        </Suggestions>
      </Form>
    </>
  )
  function handleSubmit(event) {
    event.preventDefault()
    onSubmit(selectedOption)
    setSelectedOption(null)
    event.target.elements.gamename.value = ''
    setOptions([])
  }
}

const Form = styled.form`
  display: grid;
  justify-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  margin: 0 auto;
  background: transparent;

  label {
    display: grid;
    font-size: 1.4rem;
    line-height: 1.4;
    color: transparent; /*only for screen readers*/
    background: transparent;
  }

  input {
    padding: 12px;
    border-radius: 28px;
    border-style: none;
    background-color: whitesmoke;
    box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000,
      5px 5px 15px 6px rgba(0, 0, 0, 0.3);
    margin-top: 10px;
  }

  input::placeholder {
    opacity: 0.5;
  }
`

const Suggestions = styled.div`
  font-size: 1.3rem;
  display: grid;
  justify-items: center;
  gap: 20px;
  color: whitesmoke;
  opacity: 0.9;
  height: 48%;
  backdrop-filter: blur(0.5rem);
  overflow-y: scroll;
  margin-top: 20px;
`
