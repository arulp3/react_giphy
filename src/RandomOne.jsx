import React,{useEffect, useState} from 'react'
import axios from "axios"




function RandomOne() {

    const [gif, setgif] = useState("");

    
    const fetchAPI = async ()=>{
        const url = `https://api.giphy.com/v1/gifs/random?api_key=SUytgXkX70H4EiqgErL2l2fdFSRWhvte`;
        const {data} = await axios.get(url)

        const imageSrc = data.data.images.downsized_large.url

        setgif(imageSrc)
        
        
    }

    const handleClick = ()=>{

        setTimeout(fetchAPI(), 3000);
        
        console.log('This is clicked')
    }


useEffect(() => {
    fetchAPI();
}, []);

    return (
        <div className="container">
            <h1>Random Giphy</h1>
            <img width="500px" src={gif} alt="img" />
            <button onClick = {handleClick}>Click for new</button>
        </div>
    )
}

export default RandomOne
