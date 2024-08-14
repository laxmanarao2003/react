import React, { useState } from 'react'

function FormHandling() {

    const [userInp,setuserInp]=useState({name:'',number:''})


    const submitForm=(event)=>
    {
        event.preventDefault()
    }

    return (

        <div className='container'>
            FormHandling

            <form className='col-6' onSubmit={(e)=>submitForm(e)} autoComplete='on'>

                <div className='form-floating'>
                    <input
                        type='text'
                        className='form-control'
                        id='uname'
                        name='uname'
                        placeholder=''
                        value={userInp.name}
                        onChange={(e)=>setuserInp({...userInp,name:e.target.value})}
                        required
                    />
                    <label className='form-label' htmlFor='name'>Enter your Name</label>
                </div>

                <div className='form-floating my-4'>
                    <input
                        type='tel'
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        className='form-control'
                        id='number'
                        name='number'
                        placeholder=''
                        value={userInp.number}
                        onChange={(e)=>setuserInp({...userInp,number:e.target.value})}
                        required
                    />
                    <label className='form-label' htmlFor='name'>Enter your Number</label>
                </div>
                <input 
                    type='submit'
                    className='btn btn-success'
                />
            </form>

        </div>
    )
}

export default FormHandling