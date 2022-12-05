import React from 'react'
import Note from './Note'
import Edit_note from './Edit_note';
import { useState, useEffect } from 'react';
import { useGlobalContext } from '../context';

function Notes() {

  // const[selectedNote, setSelectedNote] = useState(null)
  
  const {setSelectedNote, selectedNote, clicked_note, notes, setNotes} = useGlobalContext()


  const edit_note= (id)=> {
    let note;
    note = notes.find((item)=> item.id == id)

    setSelectedNote(note);
    

    console.log("selected note: "+selectedNote.id);
    console.log('note: '+note.id)


    const modal = document.getElementById('edit-modal-overlay');
    modal.style.display = "grid";

  }



  return (
    <>
        <div className='no_notes'>
          {(notes.length < 1)?<p>Wow such empty!</p>:''}
        </div>


      <div className='notes_container'>
        {notes.map((note)=>(
          <Note key={note.id} id={note.id} title={note.title} text={note.text} date={note.date} notes={notes} edit_note={edit_note} setNotes={setNotes} selectedNote={selectedNote} setSelectedNote={setSelectedNote}  />
        ))}

        <div className='edit_note_modal'>
          <Edit_note notes={notes} setNotes={setNotes}/>
        </div>
      </div>
    </>
  )
}

export default Notes