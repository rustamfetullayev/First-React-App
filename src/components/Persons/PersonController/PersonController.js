import React, { Component } from 'react';
import UserForm from '../../../containers/Modals/Forms/UserForm';
import Error from '../../../containers/Modals/Errors/Error';

class PersonController extends Component {
    render() {
        return (
            <div className='PersonController'>
                {
                    this.props.isFormShown === true ?
                        <UserForm 
                        isDisabled={this.props.isDisabled}
                        age={this.props.age}
                        name={this.props.name}
                        email={this.props.email}
                        toogleForm={this.props.toogleForm}
                        addUser={this.props.addUser}
                        setName={this.props.setName}
                        setEmail={this.props.setEmail}
                        setAge={this.props.setAge}/>
                        :
                        null
                }
                {
                    this.props.isErrorShown === true ?
                        <Error toogleError={this.props.toogleError}/>
                        :
                        null
                }
            </div>
        )
    }
}

export default PersonController;