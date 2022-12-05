
import './App.css';
import Notes from './components/Notes';
import { useState } from 'react'
import { nanoid } from 'nanoid';
import CreateNote from './components/CreateNote';
import Edit_note from './components/Edit_note';



function App() {
  




  return (
    <div className="App">
      <CreateNote  />
      <Notes  />
      <Edit_note />

    </div>
  );
}

export default App;
