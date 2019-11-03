import React, { Component } from 'react';
import './UserForm.css';

class UserForm extends Component {
    render() {
        return (
            <div className='layout'>
                <div className='userModal'>
                    <form onSubmit={this.props.addUser}>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-md-8 offset-md-2'>
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input type="text" required className="form-control" placeholder="Enter name..." value={this.props.name} onChange={this.props.setName} />
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" required className="form-control" placeholder="Enter email..." value={this.props.email} onChange={this.props.setEmail} />
                                    </div>
                                    <div className="form-group">
                                        <label>Age</label>
                                        <input type="number" required className="form-control" placeholder="Enter age..." value={this.props.age} onChange={this.props.setAge} />
                                    </div>
                                    <button type="submit" className="btn btn-success" disabled={this.props.isDisabled}>Add New User</button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <button onClick={this.props.toogleForm} className='close-btn fas fa-times'></button>
                </div>
            </div>
        )
    }
}

export default UserForm;