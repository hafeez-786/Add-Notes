import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

function App() {
  const [addItem, setAddItem] = useState([])
  const addNote = (note) => {
    setAddItem((oldData) => {
      return [...oldData, note]
    });
  }

 const onDelete = (id) => {
   setAddItem((preData) => 
    preData.filter((currValue, indx) => {
      return indx !== id;
    })
   )
 }

  return (
    <div className="App container">
      <Header />
      <CreateNote passNote={addNote} />

      <div className="note__block">
        {
          addItem.map((val, index) => {
            return (
              <Note
                key={index}
                id={index}
                title={val.title}
                content={val.content}
                deleteItem = {onDelete}
              />
            )
          })
        }
      </div>
      <Footer />
    </div>
  );
}

export default App

