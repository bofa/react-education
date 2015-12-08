import React from 'react';
import Todo from './Todo';

export default ({ todos, onRemove, toggleTodo }) => {

    return (
        <ul>
            {todos.map((todo, i) => {
                return (
                    <Todo toggleTodo={toggleTodo} onRemove={onRemove} key={i} todo={todo} />
                );
            })}
        </ul>
    )

};
