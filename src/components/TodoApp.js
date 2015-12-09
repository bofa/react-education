import React from 'react';

// import todos from '../todos';
// import TodoApp = from './components/smart/TodoAppContainer';
// import IndexPage = from './components/smart/IndexPageContainer';

import { List } from 'immutable';

export default class TodoApp extends React.Component {

    render() {

        console.log('props', this.props)
        const { todos, addTodo, toggleTodo, removeTodo, reciveTodos, saveTodos } = this.props;

        return (
            <div>
                <h1>Behond here there be TODOS!</h1>

                {this.props.children}


            </div>
        );
    }

    componentDidMount() {
        const { reciveTodos } = this.props;
        reciveTodos();
    }

}
