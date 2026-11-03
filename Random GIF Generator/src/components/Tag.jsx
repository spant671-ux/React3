import { useEffect, useState } from "react"
import axios from 'axios'
import Spinner from "./Spinner";

const Tag = () => {

    const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
    const [gif, setGif] = useState('')
    const [loading, setLoading] = useState(false)
    const [tag, setTag] = useState('bike')


    async function fetchData() {
        setLoading(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
        const { data } = await axios.get(url);
        const imageSource = data.data.images.downsized_large.url;
        setGif(imageSource);
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, [])


    const clickHandler = () => {
        fetchData();
    }

    return (
        <div className="w-1/2 bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-3.75 pb-5">
            <h1 className="text-2xl underline uppercase font-bold mt-4">
                Random {tag} GIF
            </h1>
            {
            loading ? (<Spinner />) : (<img src={gif} width={450} className="max-h-87.5 object-contain rounded" />)
            }

            <input
            onChange={(event) => setTag(event.target.value)}
            className="w-10/12 text-lg py-2 rounded-lg mb-0.75 text-center bg-white"
            value={tag}
            />

            <button onClick={clickHandler}
                className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg cursor-pointer"
            >
                Generate
            </button>
        </div>
    )
}

export default Tag