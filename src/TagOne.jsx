import React,{useEffect, useState} from 'react'
import axios from "axios"

function TagOne() {

    const [tag, settag] = useState("dog")
    const [gif, setgif] = useState("");

    
    const fetchAPI = async (tag)=>{
        const url = `https://api.giphy.com/v1/gifs/random?api_key=SUytgXkX70H4EiqgErL2l2fdFSRWhvte&tag=${tag}`;
        const {data} = await axios.get(url)

        const imageSrc = data.data.images.downsized_large.url

        setgif(imageSrc)
        
        
    }

    const handleClick = ()=>{
        fetchAPI(tag)
        console.log('This is clicked')
    }


useEffect(() => {
    fetchAPI('dogs');
}, []);

    return (
        <div className="container">
            <h1>Random {tag}</h1>
            <img width="500rem" height="400rem" src={gif} alt="img" />
            <input type="text" value={tag} onChange={(e)=>{settag(e.target.value)}} />
            <button onClick = {handleClick}>Click for new</button>
        </div>
    )
}

export default TagOne
