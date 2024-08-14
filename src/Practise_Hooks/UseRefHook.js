import React, { useEffect, useRef, useState } from 'react'

function UseRefHook() {

    const [count,setCount]=useState(0)

    // useRef hook is used to store mutable object and it return one  object called 'current' :)
    const myRef=useRef(0)

    useEffect(()=>{
        
        console.log("UseEffect Hook rendered")

        myRef.current=setInterval(() => {
            console.log("setInterval called");
        }, 1000);

        // myRef.current=()=>{
        //     setCount(count+1)
        // }

        return(()=>{
            console.log("component unmounted");
        })
    },[])

    return (
        <div className='text-center'>
            UseRefHook 
            <br/>
            <button 
                className='btn btn-primary' 
                onClick={()=>myRef.current()}>Update
            </button>
        </div>
    )
}

export default UseRefHook