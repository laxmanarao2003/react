/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'

function ToDoList() {

    const [inp,setInp]=useState('')
    const [list,setList]=useState([])
    const [index,setIndex]=useState(0)

    const removeItem=(removerIndex)=>{
        
        setList((e)=>
                e.filter((item)=>item.key!==removerIndex)
        )
        console.log("click to remove");

    }

    const addItems=()=>{
        if(inp!=='')
        {
            const newElement=
                            (
                                <li className='list-group-item mt-2' key={index}>
                                    <a href='#' className='text-decoration-none text-dark'>{inp}</a>
                                    <button className='btn btn-danger float-end' onClick={()=>removeItem(index)}>Remove</button>
                                </li>
                            )

            setList([...list,{key:index,item:newElement}])

            setIndex(index+1)
            console.log(index);
        }
    }

    return (
        <div className='container col-6'>
            ToDoList

            {/*********** User Inp ***********/}
            <div className='input-group'>
                <div className='form-floating'>
                    <input 
                        type='text'
                        placeholder=''
                        name='list'
                        id='list'
                        className='form-control'
                        value={inp}
                        onChange={(e)=>setInp(e.target.value)}
                        autoComplete='on'
                    />
                    <label htmlFor='list' className='form-label'>Enter Text...</label>
                </div>
                <button className='btn btn-primary px-4' onClick={()=>addItems()}>Add</button>
            </div>

            {/*********** Display List Items ***********/}

                <ol className='list-group'>
                    {
                        list.map((list)=>
                            list.item
                        )
                    }
                </ol>

        </div>
    )
}

export default ToDoList