import React,{useState} from 'react'
import useGif from './useGif'

function Tagtwo() {

    const [tag, settag] = useState("dog")
    const {gif, fetchAPI} = useGif(tag)


    const handleClick = ()=>{
        fetchAPI(tag)
        console.log('This is clicked')
    }



    return (
        <div>
            <div className="container">
            <h1>Random {tag}</h1>
            <img width="500rem" height="400rem" src={gif} alt="img" />
            <input type="text" value={tag} onChange={(e)=>{settag(e.target.value)}} />
            <button onClick = {handleClick}>Click for new</button>
        </div>
        </div>
    )
}

export default Tagtwo
