import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa'

const Card = (props) => {
    let review = props.review;
  return (
    <div className='flex flex-col md:relative'>
        <div className='absolute top-[-7rem] z-[10] mx-auto'>
            <img className='aspect-square rounded-full w-[140px] h-[140px] z-[25]' src={review.image}/>
        </div>

        <div className='w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] left-[10px] z-[5]'>

        </div>

        <div className='text-center mt-7'>
            <p className='font-bold text-2xl capitalize'>{review.name}</p>
        </div>

        <div>
            <p>{review.job}</p>
        </div>

        <div>
            <FaQuoteLeft/>
        </div>

        <div>
            {review.text}
        </div>

        <div>
            <FaQuoteRight/>
        </div>

        <div>
            <button>+</button>
            <button>=</button>
        </div>

        <div>
            <button>Surprise Me</button>
        </div>
    </div>
  )
}

export default Card