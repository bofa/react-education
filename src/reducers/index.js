import { List, Map } from 'immutable';
import uuid from 'node-uuid';
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, RECEIVE_TODOS } from '../actions/todo-actions';

const defaultState = Map({
    todos: List.of()

});

export default function(state = defaultState, action) {

    console.log('action', action);

    switch (action.type) {

        case ADD_TODO:
            return state.update('todos', todos => todos.push(action.payload));
            break;

        case TOGGLE_TODO:
            console.log("Toggle");
            return state.update('todos', todos => todos.map( t => {
                return {
                    ...t,
                    done: t.id===action.payload ? !t.done : t.done
                }
            }));
            break;

        case REMOVE_TODO:
            console.log("Remove", );
            return state.update('todos', todos => todos.remove(
                todos.findIndex(t => t.id == action.payload)
            ));
            break;

        case RECEIVE_TODOS:
            console.log("Receive");
            return state.update('todos', todos => todos.concat( action.payload ));
            break;

        default:
            return state;
    }
}
