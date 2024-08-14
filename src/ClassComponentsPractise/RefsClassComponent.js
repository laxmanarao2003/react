import React, { Component, createRef } from 'react'

export class RefsClassComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name:'rohit'
        }

        // createRef is used to store mutable object & it will returns one object called 'current' :)
        this.myRef1=createRef()
        this.myRef2=createRef()

        this.myRef2.current=100

        this.myRef1=()=>{
            console.log("Hello Rohit!");
            return 199
        }
    }

    componentDidMount() {
        // this.myRef2.current=100
        this.myRef1()
    }

    render() {
        return (
            <div className='text-center'>
                RefsClassComponent {this.myRef1()} {this.myRef2.current}
            </div>
        )
    }
}

export default RefsClassComponent