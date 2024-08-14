import React, { Component } from 'react'

// A Higher order component is used when two or more components needs to be design same functionality :)
const HocA=(OriginalCom)=>{

    class MyComponent extends Component {
        constructor(props) {
            super(props)
        
            this.state = {
                count:0
            }
        }
        increment=()=>{
            this.setState({count:this.state.count+1})
        }
        render() {
            return (
                <div className='text-center'>
                    <OriginalCom value={this.state.count} method={this.increment} {...this.props}></OriginalCom>
                </div>
            )
        }
    }
    return MyComponent
}

export default HocA