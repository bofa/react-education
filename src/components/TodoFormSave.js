import React from 'react';
import uuid from 'node-uuid';

export default class TodoFormSave extends React.Component {

    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <button type="submit">Save!</button>
            </form>
        )
    }

    onSubmit(e) {
        console.log("Saving", this.props.todos);
        e.preventDefault();
        this.props.saveTodos(this.props.todos);
    }
}
