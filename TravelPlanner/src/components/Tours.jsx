import Card from './Card'
function Tours(tours){
    return(
        <>
        <div>
            <h2>Travel Planner</h2>
        </div>
        <div>
            {
                tours.map((tour) => {
                    return <Card {...tour}/>
                })
            }
        </div>
        </>
    )
}

export default Tours;