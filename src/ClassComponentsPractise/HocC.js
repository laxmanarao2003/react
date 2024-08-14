import React, { Component } from 'react'
import HocA from './HocA'

class HocC extends Component {
    render() {
        return (
            <div className='text-center'>
                HocC {this.props.value}
                <button className='btn btn-primary' onMouseOut={this.props.method}>click</button>
            </div>
        )
    }
}

// we are passed this component to another component and it will return the functionality as we are expecting :)
export default HocA(HocC)