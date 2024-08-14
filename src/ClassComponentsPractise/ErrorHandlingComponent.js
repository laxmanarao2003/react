import React,{Component} from 'react'

class ErrorHandlingComponent extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error){
        return{
			hasError:true
		}
    }

    // componentDidCatch(error, info) {
    //     console.log(error)
    // }

    render(){
        if(this.state.hasError)
            return <h6>{this.props.children.props.overs} overs not a T20I match</h6>
        else 
            return  <h5>{this.props.children}</h5>
    }
}

export default ErrorHandlingComponent