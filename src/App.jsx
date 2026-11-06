import { useState } from 'react'
import Notes from './components/Notes'
import Info from './components/Info'
import NoteCard from './components/NoteCard'


function App() {

  return (
    <div className="bg-[#f5f5f5] font-light text-[#111]">
      <Notes />
      <Info name="Sean Riley T. Dela Cruz" />
    </div>
  )
}

export default App
