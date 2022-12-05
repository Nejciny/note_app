import React, {useState, useContext, useEffect} from 'react'
import axios from 'axios'
import { nanoid } from 'nanoid'


const AppContext = React.createContext()


const AppProvider = ({children}) => {

    const [notes, setNotes] = useState([
        {
        id: 1,
        title: "Dummy Note",
        text: "this is my dummy text. ",
        date: '1.1.2022'
        },

        
    ])

    
    const[selectedNote, setSelectedNote] = useState([]);

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const handleTitleChange = (event)=> {
        setTitle(event.target.value)
    }

    const handleTextChange = (event)=> {
        setText(event.target.value)
    }



    // const edit_note= (id)=> {
    //     let note;
    //     note = notes.find((item)=> item.id == id)
    
    //     setSelectedNote(note);

    //     console.log("selected note: "+selectedNote);
    //     console.log('note: '+note)
    
    //     const modal = document.getElementById('edit-modal-overlay');
    //     modal.style.display = "grid";
    
    // }


    var clicked_note = null;



    return <AppContext.Provider value={{notes, setNotes, selectedNote, setSelectedNote, clicked_note, title, 
    setTitle, text, setText, handleTextChange, handleTitleChange}}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return (useContext(AppContext))
}

export {AppContext, AppProvider}