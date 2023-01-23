
import './App.css';
import Notes from './components/Notes';
import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid';
import { useGlobalContext } from './context';
import CreateNote from './components/CreateNote';
import Edit_note from './components/Edit_note';



function App() {
  

  // const { notes, setNotes } = useGlobalContext();


  //   useEffect(()=> {
  //       const saved_notes = JSON.parse(localStorage.getItem('NOTES'));
  //       setNotes(saved_notes);
  //   },[]);


  //   useEffect( () => {
  //       localStorage.setItem('NOTES', JSON.stringify(notes))
  //   }, [notes])


  return (
    <div className="App">
      <CreateNote  />
      <Notes  />
      <Edit_note />

    </div>
  );
}

export default App;
