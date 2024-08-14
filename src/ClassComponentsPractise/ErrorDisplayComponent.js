import React from 'react'

function ErrorDisplayComponent(props) {

    if(props.overs==="50"){
        throw new Error('Not a T20I match');
    }

    return (
        <div>
            {/* {(props.overs!=="50")?props.overs:'Error'} */}
            {props.overs} overs is a T20I match
        </div>
    )
}

export default ErrorDisplayComponent