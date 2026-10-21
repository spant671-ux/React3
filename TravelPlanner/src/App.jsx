import Tours from './components/Tours'
import { useState } from 'react'
import './App.css'
import data from './data'

function App() {

  const [tours, setTours] = useState(data)

  return (
    <>
    <div>
      <Tours tours={tours}></Tours>
    </div>
    </>
  )
}

export default App
