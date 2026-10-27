import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Labs from './components/Labs'
import Support from './components/Support'
import NotFound from './components/NotFound'

function App() {

  return (
    <>
    <div className='App'>

      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/support'>Support</Link>
          </li>
          <li>
            <Link to='/labs'>Labs</Link>
          </li>
        </ul>
      </nav>
  
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/labs' element={<Labs />} />
        <Route path='/support' element={<Support />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
    </>
  )
}

export default App
