import React from 'react';
import classnames from 'classnames';

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
            <span>
                <span onClick={toggleTodo.bind(null, todo.id)}
                        className={classes}>{todo.text}</span>
                <button onClick={onRemove.bind(null, todo.id)}>Be Gone!</button>
            </span>
        </li>
    );

};

