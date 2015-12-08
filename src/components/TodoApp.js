import React from 'react';
import TodoList from './TodoList';
import TodoFormSave from './TodoFormSave';
import TodoForm from './TodoForm';
// import todos from '../todos';

import { List } from 'immutable';

export default class TodoApp extends React.Component {

    render() {

        console.log('props', this.props)
        const { todos, addTodo, toggleTodo, removeTodo, reciveTodos, saveTodos } = this.props;

        return (
            <div>
                <TodoList toggleTodo={toggleTodo} onRemove={removeTodo} todos={todos} />
                <TodoForm onAdd={addTodo} />
                <TodoFormSave saveTodos={saveTodos} todos={todos} />
            </div>
        );
    }

    componentDidMount() {
        const { reciveTodos } = this.props;
        reciveTodos();
    }

}
