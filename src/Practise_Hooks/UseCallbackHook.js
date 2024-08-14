/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useState } from "react";
import UCUpdateButton from "./UCUpdateButton";
import UCUpdateData from "./UCUpdateData";

function UseCallbackHook()
{
    const [runs,setRuns]=useState(0)
    const [century,setCentury]=useState(0)

    const update_100=useCallback(()=>{
        setCentury((century)=>century+1)
    },[century])

    const updateRuns=useCallback(()=>{
        if(runs%100===0)
            setCentury(century+1)
        setRuns((score)=>score+10)
    },[runs])

    return(
        <div className="text-center">
            <UCUpdateButton method={update_100} name="Century"/>
            <UCUpdateButton method={updateRuns} name="Runs"/>
            <UCUpdateData value={runs}/>
            <UCUpdateData value={century}/>
        </div>
    )
}

export default UseCallbackHook