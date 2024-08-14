import React, { useState } from 'react'
import UseEffectHookOne from './UseEffectHookOne';

/**
 * Hooks -> Hooks are used in functional components that are used to find the state of a component :)
 *          Hooks should be implemented at the top level of a component :)
 * 
 * 1.useState()
 * 2.useEffect()
 * 3.useContext()
 * 4.useRef()
 * 5.useReducer()
 * 6.useCallback()
 * 7.useMemo()
 * 
 */

function UseStateHook() {

    // useState hook is used track the state of an application :)
    const [userInp,setUserInp]=useState({name:'',regdNo:''})

    const [array,setArray]=useState([])

    const setElements=()=>{
        setArray([...array,{one:userInp.name,two:userInp.regdNo}])
    }

    return (
        <div className='text-center'>
            UseStateHook
            
            {/* using useState Array */}
            <button 
                className='btn btn-primary'
                onClick={()=>setElements()}>Click
            </button>
            {
                array.map((ele,index)=>{
                    return <h5 key={index}>{ele.one} {ele.two}</h5>
                })
            }

            
            {/* {JSON.stringify(userInp)} */}
            {/* Form Handling using useState object */}
            <div className='form-floating col-5 my-3'>
                <input 
                    type='text'
                    id='name'
                    name='name'
                    className='form-control'
                    value={userInp.regdNo}
                    onChange={(e)=>setUserInp({...userInp,regdNo:e.target.value})}
                    placeholder=''
                />
                <label htmlFor='name'>RegdNo</label>
            </div>
            <div className='form-floating col-5'>
                <input 
                    type='text'
                    id='name'
                    name='name'
                    className='form-control'
                    value={userInp.name}
                    onChange={(e)=>setUserInp({...userInp,name:e.target.value})}
                    placeholder=''
                />
                <label htmlFor='name'>Name</label>
            </div>            
            {
                (userInp.name==="")?<UseEffectHookOne/>:""
            }
        </div>
    )
}

export default UseStateHook