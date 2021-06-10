import styled from 'styled-components/macro'
import Location from '../components/Location'
import data from '../data.json'

export default function LocationList() {
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
  margin: 0 auto;
  gap: 20px;
  padding: 20px;
`
