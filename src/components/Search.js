import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import Button from './Button'

//const API_KEY = process.env.REACT_APP_API_KEY;

export default function Search({ onSubmit }) {
  const [options, setOptions] = useState([])
  const [query, setQuery] = useState('')
  const [selectedOption, setSelectedOption] = useState(null)
  useEffect(() => {
    setSelectedOption(null)
    fetch(
      `https://api.rawg.io/api/games?key=ee5514dd562841628542ee38194371a5&search=${query}`
    )
      .then(res => res.json())
      .then(data => setOptions(data.results))
  }, [query])
  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <label>
          Selected Game: {selectedOption?.name || 'None'}
          <input
            autocomplete="off"
            name="gamename"
            id="auto"
            placeholder="Type to search"
            value={selectedOption?.name}
            onChange={event => setQuery(event.target.value)}
          />
        </label>
        <Button>Add game</Button>
      </Form>
      <Suggestions className="autoContainer">
        {query &&
          options.map(option => {
            return (
              <div
                onClick={() => setSelectedOption(option)}
                className="option"
                key={option.id}
              >
                <span>{option.name}</span>
              </div>
            )
          })}
      </Suggestions>
    </section>
  )
  function handleSubmit(event) {
    event.preventDefault()
    onSubmit(selectedOption)
  }
}

const Form = styled.form`
  display: grid;
  justify-items: center;
  gap: 20px;

  label {
    display: grid;
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

const Suggestions = styled.div`
  display: grid;
  justify-items: center;
  padding: 10px;
  gap: 10px;
  color: whitesmoke;
`

// const List = styled.ul`
//   display: grid;
//   justify-items: center;
//   padding: 0;
//   list-style: none;
//   gap: 20px;
//   font-size: 1.8rem;
//   li {
//     padding: 20px;
//     border-radius: 8px;
//     color: whitesmoke;
//     width: 300px;
//     text-align: center;
//     border: ridge whitesmoke;
//     background-color: #4056a1;
//   }
// `
