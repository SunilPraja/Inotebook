import React from 'react'
import NoteContext from '../context/note/NoteContext';
import { useContext } from 'react';
import NoteItem from './NoteItem';


const Note = () => {
    const context = useContext(NoteContext);
    const { notes, setNotes } = context;
    return (
        <div className='notes my-5 grid grid-cols-3 gap-4'>
            {notes.map((notes) => {
                return <NoteItem key={notes._id} notes={notes} />
            })}
        </div>
    )
}

export default Note
