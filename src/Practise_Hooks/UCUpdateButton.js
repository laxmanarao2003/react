import React from 'react'

function UCUpdateButton(props) {
    console.log("UCUpdateButton called"+props.name);
    return (
        <div className='text-center mb-3'>
            UCUpdateButton {props.name}
            <button className='btn btn-primary' onClick={props.method}>Update</button>
        </div>
    )
}

export default React.memo(UCUpdateButton)