import React, {useState, useContext, useEffect} from 'react'
import axios from 'axios'
import { nanoid } from 'nanoid'


const AppContext = React.createContext()


const AppProvider = ({children}) => {

    const [notes, setNotes] = useState(['test'])

    const[selectedNote, setSelectedNote] = useState([]);

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const [test, setTest] = useState('');

    const handleTitleChange = (event)=> {
        setTitle(event.target.value)
    }

    const handleTextChange = (event)=> {
        setText(event.target.value)
    }


    var clicked_note = null;

    useEffect(()=> {
        // const saved_notes = JSON.parse(localStorage.getItem('NOTES'));
        // setNotes(saved_notes);
    },[]);




    useEffect(() => {
        // localStorage.setItem('NOTES', JSON.stringify(notes))

        console.log("notes have been stored to local storage.")
        console.log("notes have been updated")
      }, [test ]); // Only re-run the effect if count changes



    return <AppContext.Provider value={{notes, setNotes, selectedNote, setSelectedNote, clicked_note, title, 
    setTitle, text, setText, handleTextChange, handleTitleChange}}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return (useContext(AppContext))
}

export {AppContext, AppProvider}