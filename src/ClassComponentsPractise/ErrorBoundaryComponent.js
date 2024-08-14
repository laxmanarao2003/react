import React, { Component } from 'react'
import ErrorHandlingComponent from './ErrorHandlingComponent'
import ErrorDisplayComponent from './ErrorDisplayComponent'

class ErrorBoundaryComponent extends Component {
    render() {
        return (
            <div className='text-center'>
                ErrorBoundaryComponent
                <ErrorHandlingComponent>
                    <ErrorDisplayComponent overs="50"/>
                </ErrorHandlingComponent>
                <ErrorHandlingComponent>
                    <ErrorDisplayComponent overs="20"/>
                </ErrorHandlingComponent>
                <ErrorHandlingComponent>
                    <ErrorDisplayComponent overs="20"/>
                </ErrorHandlingComponent>
                <ErrorHandlingComponent>
                    <ErrorDisplayComponent overs="20"/>
                </ErrorHandlingComponent>
            </div>
        )
    }
}

export default ErrorBoundaryComponent