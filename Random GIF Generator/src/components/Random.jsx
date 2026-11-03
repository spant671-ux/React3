import { useState } from "react"

const Random = () => {

    const [gif, setGif] = useState('')


    const clickHandler = () => {}

  return (
    <div className="w-1/2 h-112.5 bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-3.75">
        <h1 className="text-2xl underline uppercase font-bold">
            A Random GIF
        </h1>
        <img src={gif} width="450" />
        <button onClick={clickHandler}>
            Generate
        </button>
    </div>
  )
}

export default Random