import React, { useState, useEffect } from 'react';
import Note from './components/Note';
import noteServices from './services/notes'
import Notification from './components/Notification';

const App = () => {

    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState('a new note...');
    const [showAll, setShowAll] = useState(true);
    const [errorMessage, setErrorMessage] = useState('some error happened...')

    useEffect(() => {
        noteServices
            .getAll()
            .then(initialNotes => {
                setNotes(initialNotes);
            });
    }, []);

    const addNote = (event) => {

        event.preventDefault();
        
        const noteObject = {
            content: newNote,
            date: new Date().toISOString(),
            important: Math.random() > 0.5,
        }

        noteServices
            .create(noteObject)
            .then(returnedNote => {
                setNotes(notes.concat(returnedNote));
                setNewNote('');
            });

    }

    const handleNoteChange = (event) => {

        setNewNote(event.target.value);

    }

    const notesToShow = showAll ? notes : notes.filter(note => note.important === true);

    const toggleImportanceOf = (id) => {

        const note = notes.find(note => note.id === id);
        const changedNote = { ...note, important: !note.important }

        noteServices
            .update(id, changedNote)
            .then(returnedNote => {
                setNotes(notes.map(note => note.id !== id ? note : returnedNote ))
            })
            .catch(error => {
                setErrorMessage(`Note ${note.content} was already removed from server`);
                setTimeout(() => { setErrorMessage(null) }, 5000);
                setNotes(notes.filter(n => n.id !== id));
            });

    }

    const Footer = () => {
        const footerStyle = {
            color: 'green',
            fontStyle: 'italic',
            fontSize: 16,
        }

        return (
            <div style={footerStyle}>
                <br />
                <em>Note app, Department of Computer Science, University of Helsinki 2021</em>
            </div>
        );
    }

    return (

        <div>
            <h1>Notes</h1>
            <Notification message={errorMessage} />
            <div>
                <button onClick={() => setShowAll(!showAll)} >show {showAll ? 'important': 'all'}</button>
            </div>
            <ul>
                {notesToShow.map(note => 
                    <Note
                        key={note.id}
                        note={note}
                        toggleImportance={() => toggleImportanceOf(note.id)}
                    />)}
            </ul>
            <form onSubmit={addNote}>
                <input value={newNote} onChange={handleNoteChange}/>
                <button type="submit">save</button>
            </form>
            <Footer />
        </div>

    );
  
}

export default App;