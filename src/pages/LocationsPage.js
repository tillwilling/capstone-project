import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Location from '../components/Location'
import data from '../data.json'

LocationList.propTypes = {
  locations: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      description: PropTypes.string,
    })
  ),
}

export default function LocationList({ locations }) {
  return (
    <LocationWrapper>
      {data.map(({ id, name, description, image }) => (
        <Location
          key={id}
          name={name}
          description={description}
          image={image}
        />
      ))}
    </LocationWrapper>
  )
}

const LocationWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: auto;
  gap: 20px;
  padding: 20px;
`
