import React, { useReducer } from 'react'

// An initialValue might be an object or a value :)
// const initial=0

const initialObj={
    sc:0
}

function UseReducerHook() {

    const reducer=(state,action)=>{
        console.log(state.sc)
        switch(action)
        {
            case 50:  return {sc:state.sc+action}
            case 100:   return {sc:state.sc+action}
            default: return {sc:0}
        }
    }

    // useReducer Hook is used when complex logic is required to track the state of an application :)
    const [score,dispatch]=useReducer(reducer,initialObj)

    /**
     * 1. score = initial
     * 2. dispatch describes the action that we want to perform
     * 3. reducer function takes (action,intial) in the context of useReducer(reducer,initial)
     * 4. Then reducer function takes (current_value,action)
     * 
    */
    return (
        <div className='text-center'>
            UseReducerHook {score.sc}
            <button className='btn btn-primary' onClick={()=>dispatch(50)}>Increment1</button>
            <button className='btn btn-primary' onClick={()=>dispatch(100)}>Increment2</button>
            <button className='btn btn-primary' onClick={()=>dispatch(0)}>Increment3</button>
        </div>
    )
}

export default UseReducerHook