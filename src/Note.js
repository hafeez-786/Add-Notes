import React from 'react';
import DeleteIcon from './img/deleteIcon.png'

const Note = (props) => {
  const DeleteNote = () => {
    props.deleteItem(props.id)
  }
  return (
    <div className="Note__details">
      <h6>{props.title}</h6>
      <p>{props.content}</p>
      <img src={DeleteIcon} onClick={DeleteNote}  alt="delete" />
    </div>
  )
}

export default Note
