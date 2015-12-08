import './client.less';

import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';

import { Provider } from 'react-redux';

import TodoApp from './components/smart/TodoAppContainer.js';


// import todos from './todos'
// console.log('todos', todos.toJS());

const app = (
    <Provider store={store}>
        <TodoApp />
    </Provider>
)


ReactDOM.render(
    app,
    document.getElementById('app')
)
