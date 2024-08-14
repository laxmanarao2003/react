import React, { PureComponent } from 'react'

class PureClassComponent extends PureComponent {
    constructor(props) {
        super(props)
        
        this.state = {
            name:'Rohit Sharma'
        }
    }
    
    // If state isn't updated,then purecomponent causes to protect from re-rendering the component :)
    componentDidMount() {
        console.log("componentDidMount rendered")
    }

    render() {
        console.log("component re-rendered")
        return (
            <div className='text-center'>
                PureComponent
                <button className='btn btn-primary' 
                    onClick={()=>this.setState({name:"Virat Kohli"})}>click!
                </button>
            </div>
        )
    }
}

export default PureClassComponent