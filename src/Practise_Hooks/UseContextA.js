import React, { createContext, useState } from 'react'
import UseContextB from './UseContextB'

// Use context Hook is used to pass the data from parent component to deeply nested child components :)
export const Inp=createContext();

function UseContextA() {
    const [userInp,setUserInp]=useState()
    return (
        <div className='text-center'>
            useContextA
            <div className='form-floating col-5'>
                <input 
                    type='text'
                    id='name'
                    name='name'
                    className='form-control'
                    value={userInp}
                    onChange={(e)=>setUserInp(e.target.value)}
                    placeholder=''
                />
                <label htmlFor='name'>Name</label>
            </div>   

            <Inp.Provider value={userInp}>
                <UseContextB/>
            </Inp.Provider>
        </div>
    )
}

export default UseContextA