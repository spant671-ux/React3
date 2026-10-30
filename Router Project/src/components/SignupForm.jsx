import { useState } from "react"


const SignupForm = () => {

    const [formData, setFormData] = useState({ firstname: "", lastname: "", email: "", password: "", confirmPassword: "" })

    function changeHandler(e) {
        setFormData((prevData) => (
            {
                ...prevData,
                [e.target.name]: e.target.value
            }
        ))
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

            <form>

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

            </form>

        </div>
    )
}

export default SignupForm