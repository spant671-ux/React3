import { useState } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import toast from 'react-hot-toast'
import { useNavigate } from "react-router-dom"


const SignupForm = ({setIsLoggedIn}) => {

    const [formData, setFormData] = useState({ firstname: "", lastname: "", email: "", password: "", confirmPassword: "" })

    const [showPassword, setShowPassword] = useState(false)

    const navigate = useNavigate();

    function changeHandler(e) {
        setFormData((prevData) => (
            {
                ...prevData,
                [e.target.name]: e.target.value
            }
        ))
    }

    function submitHandler(e){
        e.preventDefault();
        if(formData.password != formData.confirmPassword){
            toast.error("Passwords do not match")
        }

        setIsLoggedIn(true);
        toast.success("Account created succesfully!")
        const account = {
            ...formData
        }
        console.log("Printing account data")
        console.log(account)

        navigate("/dashboard")
    }

    return (
        <div>

            <div>
                <button>
                    Student
                </button>
                <button>
                    Instructor
                </button>
            </div>

            <form onSubmit={submitHandler}>

                <div>

                    <label>
                        <p>First name<sup>*</sup></p>
                        <input
                            required
                            type="text"
                            onChange={changeHandler}
                            name='firstname'
                            placeholder="Enter First Name"
                            value={formData.firstname}
                        />
                    </label>

                    <label>
                        <p>Last name<sup>*</sup></p>
                        <input
                            required
                            type="text"
                            onChange={changeHandler}
                            name='lastname'
                            placeholder="Enter Last Name"
                            value={formData.lastname}
                        />
                    </label>

                </div>

                <div>
                    
                    <label>
                        <p>Email address<sup>*</sup></p>
                        <input
                            required
                            type="email"
                            onChange={changeHandler}
                            name='email'
                            placeholder="Enter Email Address"
                            value={formData.email}
                        />
                    </label>
                </div>

                <div>
                     <label>
                        <p>Create Password<sup>*</sup></p>
                        <input
                            required
                            type={showPassword  ? ("text") : ("password")}
                            onChange={changeHandler}
                            name='password'
                            placeholder="Enter password"
                            value={formData.password}
                        />
                        <span onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
                        </span>
                    </label> 

                    <label>
                        <p>Confirm Password<sup>*</sup></p>
                        <input
                            required
                            type={showPassword  ? ("text") : ("password")}
                            onChange={changeHandler}
                            name='confirmPassword'
                            placeholder="Confirm password"
                            value={formData.confirmPassword}
                        />
                        <span onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
                        </span>
                    </label>

                </div>

                <button>
                    Create Account 
                </button>

            </form>

        </div>
    )
}

export default SignupForm