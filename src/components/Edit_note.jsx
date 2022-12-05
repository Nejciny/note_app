import React from 'react'
import { useState, useEffect } from 'react';
import { useGlobalContext } from '../context';
import { useForm } from "react-hook-form";

function Edit_note() {

  const { notes, setNotes, selectedNote, title, setTitle, text, setText, handleTextChange, handleTitleChange, } = useGlobalContext();

  const {register,handleSubmit, control, reset} = useForm({
    defaultValues: {
      title: "",
      text: "",
    }
  });
  
  const [count, setCount] = useState(1)


  const close_modal = () => {
    document.getElementById('edit-modal-overlay').style.display = "none";

    // reset inputs
    document.getElementById("edit_form").reset();
  }

  const updateNote = (selectedNote, note_title, note_text) =>{

    // console.log("notes: "+notes)


    const newState = notes.map(note => {
      if(note.id === selectedNote.id){
        return {...note, title: note_title, text: note_text};
      }

      return note;
    });

    setNotes(newState);

     const popup = document.getElementById('edit-modal');
     const modal_overlay = document.getElementById('edit-modal-overlay');
     popup.classList.remove('create_note_active');
     modal_overlay.style.display = "none";

  }

  function save_note_fun(){
    updateNote(selectedNote,title, text)

    // resets inputs for edit_form when a note is updated --> 
    document.getElementById("edit_form").reset();

  }

  // document.getElementById("edit_title_"+selectedNote.id).value = selectedNote.title;
  // document.getElementById("edit_text_"+selectedNote.id).value = selectedNote.text;


  return (
    <div className='edit-modal-overlay' id='edit-modal-overlay' >
      <div className="edit-modal" id='edit-modal'>
        <div className="modal_header">
          <h1></h1>
          <button onClick={()=>close_modal()}>X</button>
        </div>

        <form className="text" id='edit_form' onSubmit={handleSubmit((data)=> data)}>
          <input type="text" id={"edit_title_"+selectedNote.id} maxLength="35" defaultValue={selectedNote.title}  onChange={handleTitleChange} />
          <textarea name="" id={"edit_text_"+selectedNote.id} cols="30" rows="10" defaultValue={selectedNote.text}  onChange={handleTextChange}></textarea>
          <button type='submit' className='save_note' onClick={()=>save_note_fun()}> Save </button>
        </form>

      </div>
    </div>
  )
}


export default Edit_note