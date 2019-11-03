import React, { Component } from 'react';
import Person from '../../../components/Persons/Person/Person';

class UsersTable extends Component {
    getUserID(){
        
    }

    render() {
        return (
            <div className='row'>
                <div className='col-md-12 text-center'>
                    <h2>
                        {
                            this.props.isDeleted === false ?
                                'Current Users'
                                :
                                'Deleted Users'
                        }
                    </h2>
                </div>
                <div className='col-md-12'>
                    <table className='table table-hover table-bordered'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Email</th>
                                <th>
                                    {
                                        this.props.isDeleted === false ?
                                            'Delete'
                                            :
                                            'Undo'
                                    }
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.persons.map(p => {
                                return (
                                    <Person
                                        key={p.id}
                                        id={p.id}
                                        name={p.name}
                                        age={p.age}
                                        email={p.email}
                                        isShown={p.isShown}
                                        userChange={() => this.props.userChange(p.id)}
                                        changeName={(event) => this.props.changeName(event, p.id)}
                                        changeAge={(event) => this.props.changeAge(event, p.id)} />
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default UsersTable;