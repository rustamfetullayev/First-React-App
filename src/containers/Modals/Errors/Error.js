import React, { Component } from 'react';
import './Error.css';

class Error extends Component {
    render() {
        return (
            <div className='layout'>
                <div className='errorModal'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className='alert alert-danger'>
                                    <p>This email address is already in use. Please select another one!</p>
                                </div>
                                <button className='btn btn-success' onClick={this.props.toogleError}>OK</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Error;