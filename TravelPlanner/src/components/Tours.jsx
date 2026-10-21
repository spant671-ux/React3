import Card from './Card'
function Tours({tours, removeTour}){
    return(
        <>
        <div className='container'>
            <h2 className='title'>Travel Planner</h2>
        </div>
        <div className='cards'>
            {
                tours.map((tour) => {
                    return <Card {...tour} removeTour={removeTour}/>
                })
            }
        </div>
        </>
    )
}

export default Tours;