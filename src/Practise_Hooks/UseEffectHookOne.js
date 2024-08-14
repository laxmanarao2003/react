import React, { useEffect, useState } from 'react'

function useEffectHook() {
    const [inp,setInp]=useState(0)
    
    // UseEffect Hook is used to perform side effects such as fetching data,intervals,etc... :)
    // It accepts dependency array which helps to prevent unnecessarily re-rendering components :)
    useEffect(()=>{
        console.log("Use Effect called")

        const interval=setInterval(()=>{
            console.log("Set Interval called")
        },1000);

        
        return(()=>{
            console.log("Use Effect unMounted")
            clearInterval(interval)
        })
    },[])

    return (
        <div className='text-center'>
            useEffectHook {inp} <br/>
            <button
                className='btn btn-primary'
                onClick={()=>setInp(inp+1)}>Click1
            </button>
            <br/>
        </div>
    )
}

export default useEffectHook