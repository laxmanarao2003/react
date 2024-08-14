import { useState } from 'react'

function CustomHookForm() {

    const [inp,setInp]=useState('')

    const updateInp=(val)=>{
        // console.log(inp)
        
        setInp(val)
    }

    return (
        [inp,updateInp]
    )
}

export default CustomHookForm