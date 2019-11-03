import React, { Component } from 'react';
import PersonController from './PersonController/PersonController';
import UsersTable from '../../containers/Tables/UsersTable/UsersTable';
import first_server from '../../containers/axios';

class Persons extends Component {
    state = {
        persons: [],
        isTableShow: false,
        isFormShow: false,
        isErrorShow: false,
        name: '',
        email: '',
        age: ''
    }

    componentDidMount() {
        first_server.get('/persons.json').then(response => {
            let persons = Object.values(response.data).map(p => {
                return p;
            })
            this.setState(
                {
                    persons: persons
                }
            )
        }).catch(error => console.log(error))
    }

    //Delete or Undo the selected User
    toogleUser = (id) => {
        console.log(id);
        let attr = this.state.persons.find(p => p.id === id).isShown;
        this.setState(
            {
                persons: this.state.persons.map(p => {
                    if (p.id === id) {
                        p.isShown = !attr;
                    }
                    return p;
                })
            }
        )
    }

    //Change name of user which is exist
    nameChangeHandler = (event, id) => {
        this.setState(
            {
                persons: this.state.persons.map(p => {
                    if (p.id === id) {
                        p.name = event.target.value;
                    }
                    return p;
                })
            }
        )
    }

    //Change age of user which is exist
    ageChangeHandler = (event, id) => {
        this.setState(
            {
                persons: this.state.persons.map(p => {
                    if (p.id === id) {
                        p.age = event.target.value;
                    }
                    return p;
                })
            }
        )
    }

    //Show or Hide Table
    toogleTable = () => {
        this.setState(
            {
                isTableShow: !this.state.isTableShow
            }
        )
    }

    //Show or Hide User Form modal
    toogleForm = () => {
        this.setState(
            {
                isFormShow: !this.state.isFormShow
            }
        )
    }

    //Show or Hide Error modal
    toogleError = () => {
        this.setState(
            {
                isErrorShow: false,
                isFormShow: true
            }
        )
    }

    //--------------------------------------------------Sets state properties----------------------------------------------------
    setName = (event) => {
        this.setState(
            {
                name: event.target.value
            }
        )
    }

    setEmail = (event) => {
        this.setState(
            {
                email: event.target.value
            }
        )
    }

    setAge = (event) => {
        this.setState(
            {
                age: event.target.value
            }
        )
    }
    //---------------------------------------------------------------------------------------------------------------------------

    //Add New User
    handleUser = () => {
        if (!this.state.persons.map(p => p.email).includes(this.state.email)) {
            let persons = this.state.persons;
            let maxId = Math.max(...this.state.persons.map(p => p.id));

            const newPerson = {
                id: maxId + 1,
                name: this.state.name,
                email: this.state.email,
                age: this.state.age,
                isShown: true
            }

            first_server.post('/persons.json', newPerson).then(response => console.log(response)).catch(error => console.log(error));
            persons.push(newPerson);

            this.setState(
                {
                    persons: persons,
                    name: '',
                    email: '',
                    age: 0,
                    isFormShow: false
                }
            )
        }
        else {
            this.setState(
                {
                    isFormShow: false,
                    isErrorShow: true
                }
            )
        }
    }

    render() {
        let styleClass = 'btn-success';
        let innerText = 'Show Table of Users';

        if (this.state.isTableShow) {
            styleClass = 'btn-danger';
            innerText = 'Hide Table of Users';
        }
        else {
            styleClass = 'btn-success';
            innerText = 'Show Table of Users';
        }

        return (
            <div className='Persons'>
                <div className='container pt-3 pb-3'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <button className={'btn ' + styleClass} onClick={this.toogleTable}>{innerText}</button>
                        </div>
                        <div className='col-md-4 offset-md-4'>
                            {
                                !this.state.isFormShow ?
                                    <button className='btn btn-success' onClick={this.toogleForm}>Add New User</button>
                                    :
                                    null
                            }

                        </div>
                    </div>
                </div>
                {
                    this.state.isTableShow ?
                        <div className='container'>
                            {/* Current Users */}
                            <UsersTable
                                isDeleted={false}
                                persons={this.state.persons.filter(p => p.isShown === true)}
                                userChange={this.toogleUser}
                                changeName={this.nameChangeHandler}
                                changeAge={this.ageChangeHandler} />

                            {/* Deleted Users */}
                            <UsersTable
                                isDeleted={true}
                                persons={this.state.persons.filter(p => p.isShown === false)}
                                userChange={this.toogleUser}
                                changeName={this.nameChangeHandler}
                                changeAge={this.ageChangeHandler} />
                        </div>
                        :
                        null
                }

                <PersonController
                    isFormShown={this.state.isFormShow}
                    isErrorShown={this.state.isErrorShow}
                    name={this.state.name}
                    email={this.state.email}
                    age={this.state.age}
                    isDisabled={!(this.state.name && this.state.email && this.state.age)}
                    setName={this.setName}
                    setEmail={this.setEmail}
                    setAge={this.setAge}
                    addUser={this.handleUser}
                    toogleForm={this.toogleForm}
                    toogleError={this.toogleError} />
            </div>
        )
    }
}

export default Persons;