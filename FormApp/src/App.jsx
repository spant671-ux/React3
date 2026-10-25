
import './App.css'

function App() {

  function changeHandler(e){
    console.log(e.target.value)
  }

  return (
    <>
    <div className='App'>
      <form>
        <input 
        type="text"
        placeholder='First Name'
        onChange={changeHandler} 
        />
      </form>
    </div>
    </>
  )
}

export default App
