import React, { Component } from 'react'

class UnmountingClassComponent extends Component {
    
    componentWillUnmount()
    {
        console.log("Unmounting class component")
    }

    render() {
        return (
            <div>
                UnmountingClassComponent
            </div>
        )
    }
}

export default UnmountingClassComponent