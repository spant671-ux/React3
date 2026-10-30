import frameImage from '../assets/frame.png'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'

const Template = ({title, desc1, desc2, image, formtype, setIsLoggedIn}) => {
  return (
    <div className='flex w-11/12 max-w-290 py-12 mx-auto gap-x-12 gap-y-0'>

        <div>
            <h1 className='text-[rgb(241,242,255)] font-semibold text-[1.875rem] leading-9.5'>{title}</h1>
            <p className='text-[1.125rem] leading-6.5 mt-4'>
                <span className='text-[rgb(135,142,149)]'>{desc1}</span>
                <br />
                <span className='italic text-blue-100'>{desc2}</span>
            </p>

            {formtype === 'signup'?
            (<SignupForm setIsLoggedIn={setIsLoggedIn} />):
            (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

            <div>
                <div></div>
                <p>OR</p>
                <div></div>
            </div>

            <button>
                <p>Sign Up with Google</p>
            </button>
        </div>

        <div>
            <img src={frameImage} alt='Pattern' width={558} height={504} loading="lazy" />

            <img src={image} alt='Students' width={558} height={490} loading='lazy'/>
        </div>
 
    </div>
  )
}

export default Template