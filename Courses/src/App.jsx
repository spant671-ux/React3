import { useEffect, useState } from 'react'

import './App.css'

function App() {

  const [text, setText] = useState("")
  const [name, setName] = useState("sans")

  //Variation 1 -> Every Render
  // useEffect( () => {
  //   console.log("UI Rendering done")
  // });

  //Variation 2 -> First Render
  // useEffect(()=>{
  //   console.log("UI rendering done")
  // }, [])

  //Variation 3 -> First Render + Whenever Dependency Changes
  // useEffect(() => {
  //   console.log("Change observed")
  // }, [name])

  //Variation-4 -> To handle unmounting of a component
  useEffect(() => {
    // add event listener
    console.log("listener added");
    return () => {
      console.log("listener removed");
    }    
  }, [text]);

  function changeHandler(e){
    console.log(text);
    setText(e.target.value);
  }

  return (
    <>
    <input type="text" onChange={changeHandler}/>
    </>
  )
}

export default App
