import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Location.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  id: PropTypes.number,
}

export default function Location({ image, name, id }) {
  return (
    <LocationCard id={id}>
      <img src={image} alt="" />
      <span>{name}</span>
    </LocationCard>
  )
}

const LocationCard = styled.section`
  max-width: 300px;
  border-radius: 8px;
  box-shadow: 0 6px 10px #0006;
  display: grid;
  gap: 20px;

  img {
    max-width: 300px;
    border-radius: 8px 8px 0 0;
  }

  span {
    padding: 10px 0 10px 10px;
    width: 100%;
    text-align: left;
  }
`
