import React from 'react';
import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md";



const NoteItem = (props) => {
    const { notes } = props;

    return (
        <div className=' note p-3 border border-gray-300 rounded-lg mb-3'>
            <div className='flex justify-between '>
                <h3 className='text-lg font-semibold mb-2'>{notes.title}</h3>
                <div className='flex gap-3 '>
                    <MdOutlineDelete size={25} className='cursor-pointer hover:text-indigo-900' />
                    <MdOutlineEdit size={25} className='cursor-pointer hover:text-indigo-900' />
                </div>
            </div>
            <p>{notes.description}</p>
        </div>
    )
}

export default NoteItem
