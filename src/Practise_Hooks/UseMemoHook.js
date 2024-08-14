import React,{useMemo, useState} from 'react'

function UseMemoHook() {
    const [count1,setCount1]=useState(0)
    const [count2,setCount2]=useState(0)

    const increment1=()=>{
        setCount1(count1+1)
    }
    const increment2=()=>{
        setCount2(count2+1)
    }

    // useMemo Hook accepts dependency array and it will be called when the mentioned dependencies will be updated :)
    // useMemo Hook will prevents us from decreasing the performance of the application :)
    const lowPerformance=useMemo(()=>{
        console.log("low performance function");
        for(let i=0; i<1000000000; i++)
        {

        }
    },[count2])
    return (
        <div className='text-center'>
            UseMemoHook {count1} - {count2}
            <button className='btn btn-primary' onClick={()=>increment1()}>Increment</button>
            <button className='btn btn-primary'onClick={()=>increment2()}>Decrement</button>
            {lowPerformance}
        </div>
    )
}

export default UseMemoHook