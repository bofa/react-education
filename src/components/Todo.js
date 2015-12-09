import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';

export default ({ todo, onRemove, toggleTodo }) => {

    const classes = classnames(
        'todo',
        {
            done: todo.done
        }
    );

    // <input onChange={toggleTodo.bind(null, todo.id)} checked={todo.done} type="checkbox"></input>

    return (
        <li>
            <Link className="{classes}" to={`/todo/${todo.id}`}>
                {todo.text}
            </Link>
            <button onClick={toggleTodo.bind(null, todo.id)}>Toggle</button>
            <button onClick={onRemove.bind(null, todo.id)}>Be Gone!</button>
        </li>
    );

};

