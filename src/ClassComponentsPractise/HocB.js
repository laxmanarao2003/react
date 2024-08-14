import React, { Component } from 'react'
import HocA from './HocA'

class HocB extends Component {
    
    render() {
        console.log(this.props.val)
        return (
            <div className='text-center'>
                HocB {this.props.value}
                <button className='btn btn-primary' onClick={this.props.method}>click</button>
            </div>
        )
    }
}

// we are passed this component to another component and it will return the functionality as we are expecting :)
export default HocA(HocB)