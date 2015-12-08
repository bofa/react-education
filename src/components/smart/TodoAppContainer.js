import { connect } from 'react-redux';
import TodoApp from '../TodoApp';
import { addTodo, removeTodo, toggleTodo, reciveTodos, saveTodos } from '../../actions/todo-actions'

function mapStateToProps(state) {
    return {
        todos: state.get('todos')
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addTodo: todo => dispatch(addTodo(todo)),
        toggleTodo: id => dispatch(toggleTodo(id)),
        removeTodo: id => dispatch(removeTodo(id)),
        reciveTodos: () => dispatch(reciveTodos()),
        saveTodos: todos => dispatch(saveTodos(todos)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoApp);
