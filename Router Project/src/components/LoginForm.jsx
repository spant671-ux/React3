import { useState } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { Link } from "react-router-dom"
import toast from 'react-hot-toast'
import { useNavigate } from "react-router-dom"


const LoginForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate()

    const [showPassword, setShowPassword] = useState(false)

    const [formData, setFormData] = useState({email:"", password:""})

    function changeHandler(e){
        setFormData( (prevData) => (
            {
                ...prevData, 
                [e.target.name]:event.target.value
            }
        ) )
    }

    function submitHandler(e){
        e.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate('/dashboard');
    }

  return (
    <form onSubmit={submitHandler}>
        <label>
            <p>
                Email Address<sup>*</sup>
            </p>
            <input required
            type="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="Enter email id" 
            name="email"
            />
        </label>

        <label>
            <p>
                Password<sup>*</sup>
            </p>
            <input required
            type={showPassword ? ("text") : ("password") }
            value={formData.password}
            onChange={changeHandler}
            placeholder="Enter Password"
            name="password" 
            />

            <span onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye />)}
            </span>

            <Link to="#">
                <p>
                    Forgot Password
                </p>
            </Link>
        </label>

        <button>
            Sign In
        </button>
    </form>
  )
}

export default LoginForm