import styled from 'styled-components/macro'
import TrashIcon from '../images/trash_icon.png'

export default function RemoveButton({ onRemove, id }) {
  return (
    <Button onClick={() => onRemove(id)}>
      <img src={TrashIcon} alt="" />
    </Button>
  )
}

const Button = styled.button`
  width: 31px;
  height: 31px;
  border-radius: 20px;
  border: none;
  background-color: #c3073f;
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 3px rgba(0, 0, 0, 0);
  img {
    width: 23px;
    background-color: transparent;
  }
`
