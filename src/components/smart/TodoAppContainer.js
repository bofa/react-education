import { connect } from 'react-redux';
import TodoApp from '../TodoApp';
import { addTodo, removeTodo, toggleTodo } from '../../actions/todo-actions'

function mapStateToProps(state) {
    return {
        todos: state.get('todos')
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addTodo: todo => dispatch(addTodo(todo)),
        toggleTodo: id => dispatch(toggleTodo(id)),
        removeTodo: id => dispatch(removeTodo(id))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoApp);
