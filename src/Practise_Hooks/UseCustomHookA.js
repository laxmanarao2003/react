import React from 'react'
import CustomHookForm from './CustomHookForm'

function UseCustomHookA() {

    const [name,updateInp1]=CustomHookForm()
    const [num,updateInp2]=CustomHookForm()

    return (
        <div className='text-center'>
            UseCustomHookA
            <div className='form-floating'>
                <input 
                    type='text'
                    value={name}
                    onChange={(e)=>updateInp1(e.target.value)}
                    name='name'
                    id='name'
                    className='form-control'
                    placeholder=''
                />
                <label htmlFor='name'>Name</label>
            </div>
            <div className='form-floating'>
                <input 
                    type='number'
                    value={num}
                    onChange={(e)=>updateInp2(e.target.value)}
                    name='number'
                    id='number'
                    className='form-control'
                    placeholder=''
                />
                <label htmlFor='number'>Number</label>
            </div>
        </div>
    )
}

export default UseCustomHookA