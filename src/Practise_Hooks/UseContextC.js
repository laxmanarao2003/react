import React, { useContext } from 'react'
import { Inp } from './UseContextA'

function UseContextC() {

    const name=useContext(Inp)  
    return (
        <div>
            UseContextC {name}
        </div>
    )
}

export default UseContextC