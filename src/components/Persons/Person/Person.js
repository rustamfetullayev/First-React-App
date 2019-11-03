import React, { Component } from 'react';
import './Person.css';

class Person extends Component {
    render() {
        let styleClass = 'fa-times';
        let style = {
            color: 'red',
            cursor: 'pointer'
        }

        if (this.props.isShown) {
            styleClass = 'fa-times';
            style.color = 'red'
        }
        else {
            styleClass = 'fa-undo';
            style.color = 'green'
        }

        return (
            <tr>
                <td>
                    <input className='form-control no-border' type='text' value={this.props.name} onChange={this.props.changeName} />
                </td>
                <td>
                    <input className='form-control no-border' type='number' value={this.props.age} onChange={this.props.changeAge} />
                </td>
                <td>{this.props.email}</td>
                <td>
                    <i className={'fas ' + styleClass} style={style} onClick={this.props.userChange}></i>
                </td>
            </tr>
        )
    }
}

export default Person;