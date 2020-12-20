import React, { useState } from 'react';

const CreateNote = (props) => {
  const [expand, setExpand] = useState(false)

  // Form note code below here..
  const [note, setNote] = useState({
    title: '',
    content: ''
  });

  const inputEvent = (event) => {
    const { name, value } = event.target
    setNote((oldData) => {
      return {
        ...oldData,
        [name]: value,
      };
    });
  }

  const addEvent = (e) => {
    e.preventDefault()
    props.passNote(note)
    setNote({
      title: '',
      content: ''
    });
  }

  const expandIt = () => {
    setExpand(true)
  }
  
  const backToNormal = () => {
     setExpand(false)
  }

  return (
    <div className="main__note" onDoubleClick={backToNormal}>
      <div className="form__part">
        <form>
          <div className="form-group">
            <input
              type="text"
              name="title"
              className="form-control"
              onChange={inputEvent}
              value={note.title}
              autoComplete="off"
              placeholder="Title"
              onClick={expandIt}
            />
          </div>

          { expand ?
            <div>
              <textarea
                rows=""
                column=""
                placeholder="Write a note..."
                className="textarea__note"
                name="content"
                onChange={inputEvent}
                value={note.content}
              />
              <button
                className="btn"
                onClick={addEvent}
              >Add</button>
            </div>
            : null
          }
        </form>
      </div>
    </div>
  )
}

export default CreateNote
