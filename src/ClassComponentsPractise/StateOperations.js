import React, { Component } from 'react'

export class StateOperations extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            name:"Laxmana Rao",
            regdNo:703,
            marks:[9.2,9.5,9.6,9.7,9.8,9.9]
        }
        this.setVal=this.setVal.bind(this)
    }

    setVal(){
        this.setState({name:"Virat",regdNo:"20KD1A0703"})
    }

    setVal2=()=>{
        this.setState({name:"Dhoni",regdNo:"20KD1A0703"})
    }

    addMarks(){
        const inp=prompt("Enter marks")
        this.setState({marks:[...this.state.marks,inp]})
    }

    render() {
        return (
            <div className='text-center'>
                StateOperations

                <h5>{this.state.name}</h5>
                <h5>{this.state.regdNo}</h5>
                
                {/* State changes in inline */}
                <button className='btn btn-primary'
                    onClick={()=>this.setState({name:"rohit",regdNo:"20KD1A0703"})}>click
                </button>
                <br/>

                {/* Using Bind */}
                <button className='btn btn-primary'
                    onClick={this.setVal}>click
                </button>
                <br/>

                {/* Using Arrows */}
                <button className='btn btn-primary'
                    onClick={this.setVal2}>click
                </button>
                <br/>

                <button className='btn btn-primary' onClick={()=>this.addMarks()}>Add marks</button>

                {/* ArrayHandling using this.state */}
                {
                    this.state.marks.map((mark,index)=>{
                        return <h6 key={index}>{mark}</h6>
                    })
                }
            </div>
        )
    }
}

export default StateOperations