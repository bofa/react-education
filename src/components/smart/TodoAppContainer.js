import { connect } from 'react-redux';
import TodoApp from '../TodoApp';
import { addTodo, removeTodo, toggleTodo, reciveTodos, saveTodos } from '../../actions/todo-actions'

function mapStateToProps(state) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    return {
        reciveTodos: () => dispatch(reciveTodos()),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoApp);
