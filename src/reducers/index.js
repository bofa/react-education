import { List, Map } from 'immutable';
import uuid from 'node-uuid';
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../actions/todo-actions';

const defaultState = Map({
    todos: List.of(
        {
            text: 'Do some stuff',
            done: false
        },
        {
            text: 'Eat stuff',
            done: true
        },
        {
            text: 'Buy new TV',
            done: false
        },
    ).map(todo => {
        return {
            ...todo,
            id: uuid.v4()
        }
    })

});

export default function(state = defaultState, action) {

    console.log('action', action);

    switch (action.type) {

        case ADD_TODO:
            return state.update('todos', todos => todos.push(action.payload));
            break;

        case TOGGLE_TODO:
            return state.update('todos', todos => todos.findIndex(t => t.id == id));
            break;

        default:
            return state;
    }
}
