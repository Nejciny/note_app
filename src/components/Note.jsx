import { faTrash } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Note( {id, title, text, edit_note, date,notes, setNotes, }) {

  function delete_note(id, setNotes){
    const updatedNotes = notes.filter((note)=> note.id !== id);
    setNotes(updatedNotes);
  }




  return (
    <div className='note' id={id}>
      <div className="text">
        <div className="note_header">
        <h3>{title}</h3>
        <p>{date}</p>
        </div>
        <div className="note_text"> {text}</div>

      </div>


      <div className="note_footer">
          <button className='edit_note' onClick={()=>edit_note(id)}> Edit</button>
          <button className='delete_note' onClick={()=>delete_note(id, setNotes)}> <FontAwesomeIcon icon={faTrash} /></button>
      </div>
    </div>
  )
}

export default Note