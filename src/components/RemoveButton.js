import styled from 'styled-components/macro'
import TrashIcon from '../images/trash_icon.png'

export default function RemoveButton({ onRemove, id }) {
  return (
    <Button
      onClick={event => {
        event.stopPropagation()
        onRemove(id)
      }}
    >
      <img src={TrashIcon} alt="" />
    </Button>
  )
}

const Button = styled.button`
  position: relative;
  top: 105px;
  margin-left: 0;
  width: 300px;
  height: 25px;
  border-radius: 0 0 8px 8px;
  border: none;
  background-color: #c3073f;
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 3px rgba(0, 0, 0, 0);
  img {
    width: 23px;
    background-color: transparent;
  }
`
