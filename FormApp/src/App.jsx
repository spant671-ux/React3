
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

  const [formData, setFormData] = useState({firstName: "", lastName: "", email:"", comments:"", isVisible:true});

  function changeHandler(e){
    setFormData(prevFormData => {
      return{
        ...prevFormData,
        [e.target.name] : e.target.value
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
      </form>
    </div>
    </>
  )
}

export default App
