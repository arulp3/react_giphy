import {useEffect, useState} from 'react'
import axios from "axios"

const url = `https://api.giphy.com/v1/gifs/random?api_key=SUytgXkX70H4EiqgErL2l2fdFSRWhvte&`;

function useGif(tag) {

    
    const [gif, setgif] = useState("");

    
    const fetchAPI = async (tag)=>{
      
        const {data} = await axios.get(tag ?`https://api.giphy.com/v1/gifs/random?api_key=SUytgXkX70H4EiqgErL2l2fdFSRWhvte&tag=${tag}` : `https://api.giphy.com/v1/gifs/random?api_key=SUytgXkX70H4EiqgErL2l2fdFSRWhvte` )

        const imageSrc = data.data.images.downsized_large.url

        setgif(imageSrc)
        
        
    }


useEffect(() => {
    fetchAPI(tag);
}, [tag]);

    
}

export default useGif
