import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa'


const Card = (props) => {
    let review = props.review;
  return (
    <div className='flex flex-col items-center relative mt-20'>
        <div className='absolute -top-14 z-10 left-[10%]'>
            <img className='aspect-square rounded-full w-[140px] h-[140px] object-cover' src={review.image}/>
        </div>

        <div className='w-[140px] h-[140px] bg-violet-500 rounded-full absolute -top-[3rem] left-[calc(10%-6px)] z-[5]'>
        </div>

        <div className='bg-white rounded-lg shadow-md w-[500px] max-w-full flex flex-col items-center pt-20 pb-8 px-8'>
            <div className='text-center'>
                <p className='font-bold text-2xl capitalize'>{review.name}</p>
            </div>

            <div className='text-center mt-1'>
                <p className='text-violet-300 uppercase text-sm'>{review.job}</p>
            </div>

            <div className='text-violet-400 mx-auto mt-5'>
                <FaQuoteLeft/>
            </div>

            <div className='text-center mt-4 text-slate-500'>
                {review.text}
            </div>

            <div className='text-violet-400 mx-auto mt-5'>
                <FaQuoteRight/>
            </div>

            
        </div>
    </div>
  )
}

export default Card