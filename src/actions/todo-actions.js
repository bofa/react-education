import axios from 'axios';
import { List } from 'immutable'

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const SAVE_TODOS = 'SAVE_TODOS';


export function addTodo(todo) {
    return {
        type: ADD_TODO,
        payload: todo
    };
}

export function toggleTodo(id) {
    return {
        type: TOGGLE_TODO,
        payload: id
    };
}

export function removeTodo(id) {
    return {
        type: REMOVE_TODO,
        payload: id
    };
}

export function reciveTodos(todos) {

    return function(dispatch) {
        axios.get('/api/todo')
            .then(response => response.data)
            .then(todos => {
                dispatch({
                    type: RECEIVE_TODOS,
                    payload: List(todos)
                });
            });

    };
}

export function saveTodos(todos) {
    console.log("Saving", todos)
    axios.post('/api/todo', todos);

    return {
        type: SAVE_TODOS,
        payload: todos
    };

    /*
    return function(dispatch) {
        axios.get('/api/todo')
            .then(response => response.data)
            .then(todos => {
                dispatch({
                    type: RECEIVE_TODOS,
                    payload: List(todos)
                });
            });

    };
    */
}
