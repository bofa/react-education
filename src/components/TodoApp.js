import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
// import todos from '../todos';

import { List } from 'immutable';

export default class TodoApp extends React.Component {

    render() {

        console.log('props', this.props)
        const { todos, addTodo, toggleTodo, removeTodo } = this.props;

        return (
            <div>
                <TodoList toggleTodo={toggleTodo} onRemove={removeTodo} todos={todos} />
                <TodoForm onAdd={addTodo} />
            </div>
        );
    }

    /*
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                todos: todos
            })
        }, 1500)
    }
    */
    /*
    removeTodo(id) {
        console.log("Removing", id);

        this.setState({
            todos: this.state.todos.remove(
                this.state.todos.findIndex(t => t.id == id)
            )
        })
    }
    */

    /*
    toggleTodo(id) {
        console.log("Toggle", id);

        this.setState({
            todos: this.state.todos.map( t => {
                return {
                    ...t,
                    done: t.id==id ? !t.done : t.done
                }
            })
        })
    }
    */

}
