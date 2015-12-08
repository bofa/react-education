import React from 'react';
import uuid from 'node-uuid';

export default class TodoForm extends React.Component {

    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <input ref="text" type="text" placeholder="Hold on!" />
                <button type="submit">Add</button>
            </form>
        )
    }

    onSubmit(e) {
        e.preventDefault();
        const newTodo = {
            uuid: uuid.v4(),
            text: this.refs.text.value,
            done: false
        }
        this.props.onAdd(newTodo);
        this.refs.text.value = '';
    }
}
