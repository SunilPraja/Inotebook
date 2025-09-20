import React from 'react'
import Note from './Note'



function Home() {
  
  return (
    <section className='notes-container'>
      <div className='container w-1/2 mx-auto p-5'>
        <form className='flex flex-col gap-4 notes-form'>
          <label htmlFor="message" className="block text-sm text-lg font-medium text-gray-700 mb-1">
            Add Your Note
          </label>
          <textarea id="message" name="message"
            className="w-full h-32 p-3 border border-gray-300 rounded-lg 
         focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
          <button className='button bg-indigo-500 text-white py-2 px-4 rounded w-3xs'>Submit</button>
        </form>
        <div className='notes my-5'>
          <h2 className='text-center text-xl mb-5'>Your Notes</h2>

            <Note/>
        </div>
      </div>
    </section>
  )
}

export default Home
