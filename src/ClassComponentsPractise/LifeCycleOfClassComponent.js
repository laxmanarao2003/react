import React, { Component } from 'react'
import UnmountingClassComponent from './UnmountingClassComponent'

/**
 * Lifecycle of a class component
 * 3 phases:-
 *  1. Mounting
 *  2. Updating
 *  3. Unmounting
 * 
 *  1.Mounting =>
 *     1. constructor()
 *     2. getDerivedStateFromProps()
 *     3. render()
 *     4. componentDidMount()
 * 
 *  2. Updating =>
 *     1. getDerivedStateFromProps()
 *     2. shouldComponentUpdate()
 *     3.render()
 *     4.getSnapshotBeforeUpdate()
 *     5.componentDidUpdate()
 * 
 *  3. Unmounting =>
 *     componentWillUnmount()
*/

class LifeCycleOfClassComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name:"Rohit Sharma"
        }
        console.log("Constructor called")
    }

    // getDerivedStateFromProps will be initiated before render the elements into DOM
    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps")
        return true
    }

    // renders html elements into DOM
    render() {
        console.log("render");  
        return (
            <div className='text-center'>
                LifeCycleOfClassComponent <h5>{this.state.name}</h5>
                <button className='btn btn-primary' 
                    onClick={()=>this.setState({name:"Virat Kohli"})}>click!
                </button>

                {
                    ((this.state.name==="Rohit Sharma") && <UnmountingClassComponent/>)
                }
            </div>
        )
    }

    // componentDidMount() is called after execution of all the child components
    componentDidMount() { 
        console.log("componentDidMount called")
    }

    // Upadating 

    // It decides whether a state will be update or not :)
    shouldComponentUpdate()
    {
        if(this.state.name==="Rohit Sharma")
            return true
        return false
    }

    // getSnapshotBeforeUpdate is used to access the current state before update :)
    getSnapshotBeforeUpdate = (prevProps, prevState) => {
        console.log(prevState.name)
        return true
    }

    // componentDidUpdate will be called after state gets updated :)
    componentDidUpdate(prevProps, prevState) {
        console.log(this.state.name);
    }

}

export default LifeCycleOfClassComponent