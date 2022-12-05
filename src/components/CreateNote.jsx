import React from 'react'
import { useState, useEffect } from 'react'
import Notes from './Notes';
import { nanoid } from 'nanoid';
import { useGlobalContext } from '../context';
import { useForm } from "react-hook-form";

function CreateNote() {

    const {title, setTitle, text, setText, handleTextChange, handleTitleChange, notes, setNotes} = useGlobalContext();

    const [newNoteID, setNewNoteID] = useState(4)

    const date = new Date();
    const display_date = date.getDate()+'/'+date.getMonth()+'/'+date.getFullYear();


    const create_note_popup = () => {
        const popup = document.getElementById('create_note');
        const modal_overlay = document.getElementById('modal-overlay');
        popup.classList.add('create_note_active');
        modal_overlay.style.display = "grid";
    }

    const close_window = ()=>{
        const popup = document.getElementById('create_note');
        const modal_overlay = document.getElementById('modal-overlay');
        popup.classList.remove('create_note_active');
        modal_overlay.style.display = "none";

        document.getElementById("create_note").reset();
    }

    function saveNote(note_title, note_text){
        var note = { 
         id: newNoteID,
        title: note_title,
        text: note_text,
        date: display_date,
        }


        setNotes([...notes, note])
        setNewNoteID(newNoteID+1)

        //reset form 
        document.getElementById("create_note").reset();

        const popup = document.getElementById('create_note');
        const modal_overlay = document.getElementById('modal-overlay');
        popup.classList.remove('create_note_active');
        modal_overlay.style.display = "none";
    }

    const {handleSubmit} = useForm();

    useEffect (()=>{
        console.log('notes: '+ notes);
    },[notes])




    return (
    <div>
        <div className='create_note_button_container'>
            <button className='create_note_button' onClick={create_note_popup}> Create note</button>
        </div>
        <div className='modal-overlay' id='modal-overlay'>
            <form className='note  create_note' id='create_note' onSubmit={handleSubmit((data)=> data)}>
                <div className='close_btn_container'>
                    <div> </div>
                    <button onClick={close_window}> X</button>
                </div>
                <div className="text_container">
                    <input name="title" placeholder='Title' id="" cols="1" rows="1" maxLength="35" onChange={handleTitleChange}></input>
                    <textarea name="text" id="" cols="1" rows="15" onChange={handleTextChange}></textarea>
                </div>

                <div className='create_note_footer'>
                    <button type='submit' className='save_note' onClick={()=>saveNote(title, text)}> Save </button>
                </div>

            </form>


        </div>

    </div>

    )
}

export default CreateNote