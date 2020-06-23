mport React, { Component } from 'react';
import ReactDom from  'react-dom';
import { Component } from 'react';

class List extends Component {
    render() {
        const tasks = [];

        return (
            <ol>
                {this.props.tasks.map(() => {
                    <li key={index}> {task} </li>
                })}
            </ol>
        )
    }
}