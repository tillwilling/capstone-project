import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Location.propTypes = {
  locations: PropTypes.arrayOf(
    PropTypes.shape({ image: PropTypes.node, text: PropTypes.string })
  ),
}

export default function Location({ image, text }) {
  return (
    <ListWrapper>
      <li>
        <Image src={image} alt=""></Image>
        <ImageText>{text}</ImageText>
      </li>
    </ListWrapper>
  )
}

const Image = styled.img`
  max-width: 300px;
  border-radius: 8px 8px 0 0;
`

const ListWrapper = styled.ul`
  list-style-type: none;
  max-width: 300px;
  padding: 0 0 10px 0;
  border-radius: 8px;
  box-shadow: 0 6px 10px #0006;
  display: grid;
  gap: 20px;

  li {
    display: grid;
    align-items: center;
  }
`

const ImageText = styled.span`
  width: 100%;
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`
