import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props)=>{
    const notesInitial = [
    {
        "_id": "68ad9fb282abffc90e8d9d1a",
        "user": "68ac555f2325d86d1baf3246",
        "title": "My Post1",
        "description": "Hello World 1",
        "tag": "personal",
        "date": "2025-08-26T11:51:14.584Z",
        "__v": 0
    },
    {
        "_id": "68ad9fb282abffc90e8d9d1b",
        "user": "68ac555f2325d86d1baf3246",
        "title": "My Post2",
        "description": "Hello World 2",
        "tag": "personal",
        "date": "2025-08-26T11:51:14.584Z",
        "__v": 0
    },
    {
        "_id": "68ad9fb282abffc90e8d9d1c",
        "user": "68ac555f2325d86d1baf3246",
        "title": "My Post3",
        "description": "Hello World 3",
        "tag": "personal",
        "date": "2025-08-26T11:51:14.584Z",
        "__v": 0
    },
    {
        "_id": "68ad9fb282abffc90e8d9d1d",
        "user": "68ac555f2325d86d1baf3246",
        "title": "My Post4",
        "description": "Hello World 4",
        "tag": "personal",
        "date": "2025-08-26T11:51:14.584Z",
        "__v": 0
    }
]

const [notes, setNotes] = useState(notesInitial);
    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
         </NoteContext.Provider>
    )
}

export default NoteState;