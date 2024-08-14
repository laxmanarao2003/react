import React from 'react'

function UCUpdateData(props) {
    console.log("UCUpdateData");
    return (
        <div className='text-center mb-3'>
            UCUpdateData {props.value}
        </div>
    )
}

export default React.memo(UCUpdateData)