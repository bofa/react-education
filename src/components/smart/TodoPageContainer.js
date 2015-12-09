import { connect } from 'react-redux';
import TodoPage from '../TodoPage';

function mapStateToProps(state) {
    return {
        todos: state.get('todos')
    }
}


export default connect(
    mapStateToProps
)(TodoPage);
