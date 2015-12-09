import React from 'react';

import TodoList from './TodoList';
import TodoFormSave from './TodoFormSave';
import TodoForm from './TodoForm';

import { List } from 'immutable';

export default ({ todos, addTodo, toggleTodo, removeTodo, reciveTodos, saveTodos }) => {

    return (
        <section>
            <TodoList toggleTodo={toggleTodo} onRemove={removeTodo} todos={todos} />
            <TodoForm onAdd={addTodo} />
            <TodoFormSave saveTodos={saveTodos} todos={todos} />
        </section>
    );
}
