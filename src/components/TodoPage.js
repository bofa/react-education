import React from 'react';

const TodoPage = props => {

    console.log("Todopage props", props);

    const { todos, params } = props;

    const currentTodo = todos.find(todo => todo.id === params.uuid)

    if(!currentTodo) {
        return (
        <div>
            No todos here!
        </div>
    );
    }

    return (
        <div>
            {currentTodo.text}
        </div>
    );
}

export default TodoPage
