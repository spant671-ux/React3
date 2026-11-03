import { useState } from "react"

const Random = () => {

    const [gif, setGif] = useState('')


    const clickHandler = () => {}

  return (
    <div className="w-1/2 h-[450px] bg-green-500 rounded-lg border border-black">
        <h1>
            Random GIF
        </h1>
        <img src={gif} width={450} />
        <button onClick={clickHandler}>
            Generate
        </button>
    </div>
  )
}

export default Random