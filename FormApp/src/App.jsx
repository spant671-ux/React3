
import { useState } from 'react'
import './App.css'

function App() {

  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  // console.log(firstName)
  // console.log(lastName)

  // function firstNameHandler(e){
  //   setFirstName(e.target.value);
  // }

  // function lastNameHandler(e){
  //   setLastName(e.target.value);
  // }

  const [formData, setFormData] = useState({firstName: "", lastName: "", email:"", comments:"", isVisible:true, mode:""});

  function changeHandler(e){
    const {name, value, checked, type} = e.target
    setFormData(prevFormData => {
      return{
        ...prevFormData,
        [name] : type === "checkbox" ? checked : value
      }
    });
  }

  return (
    <>
    <div className='App'>
      <form>
        <input 
        type="text"
        placeholder='First Name'
        onChange={changeHandler} 
        name='firstName'
        value={formData.firstName}
        />

        <br/>

        <input 
        type="text"
        placeholder='Last Name'
        onChange={changeHandler}
        name='lastName' 
        value={formData.lastName}
        />

        <br/>

        <input 
        type="email"
        placeholder='E-Mail'
        onChange={changeHandler}
        name='email'
        value={formData.email}
        />

        <br/>

        <textarea
        placeholder='Enter your Comments here'
        onChange={changeHandler}
        name='comments'
        value={formData.comments}
        />

        <br/>
        
        <label htmlFor='isVisible'>Am I visible?</label>
        <input 
        type="checkbox" 
        name="isVisible"
        id='isVisible'
        onChange={changeHandler}
        checked={formData.isVisible}
        />

        <br/>

        <label htmlFor='Online-Mode'>Am I Online?</label>
        <input 
        type="radio" 
        name="mode"
        onChange={changeHandler} 
        value="Online-Mode" 
        id="Online-Mode"
        checked={formData.mode === "Online-Mode"}
        />

        <label htmlFor='Offline-Mode'>Am I Offline?</label>
        <input 
        type="radio" 
        name="mode"
        onChange={changeHandler} 
        value="Offline-Mode" 
        id="Offline-Mode"
        checked={formData.mode === "Offline-Mode"}
        />

        
      </form>
    </div>
    </>
  )
}

export default App
