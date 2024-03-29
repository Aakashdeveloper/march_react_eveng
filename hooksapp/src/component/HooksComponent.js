import React,{useState, useEffect} from 'react';
import Display from './DisplayComponent';

const url ="https://developerfunnel.herokuapp.com/location"

function HooksComponent(){

    const [title] = useState('Hooks App');
    const [count,setCount] = useState(0)
    const [count1,setCount1] = useState(0)
    const [city,setCity] = useState()

    const mycount = () => {
        setCount(count+1)
    }

    useEffect(() => {
        fetch(url)
        .then((res) =>  res.json())
        .then((data) => {
            setCity(data)
        })
    })

    return(
        <div>
            <h1>{title}</h1>
            <h2>{count}</h2>
            <button onClick={mycount}>Counter</button>
            <h2>{count1}</h2>
            <button onClick={() => {setCount1(count1+1)}}>Counter</button>
            <Display mycity={city}/>
        </div>
    )
}

export default HooksComponent