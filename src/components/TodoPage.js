import React from 'react';

const TodoPage = props => {

    console.log("Todopage props", props);

    const { todos, params } = props;
    const currentTodo = todos.find(todo => todo.id === params.uuid)

    console.log("Todopage currentTodo", currentTodo);

    if(!currentTodo) {
        return (
            <div>
                No todos here!
            </div>
    )   ;
    }

    if(currentTodo.done) {
        return (
            <div>
                Good work! {currentTodo.text} is done.
            </div>
        );
    }
    else {
        return (
            <div>
                Keep working on {currentTodo.text}.
            </div>
        );
    }
}

export default TodoPage
