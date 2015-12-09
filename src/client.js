import './client.less';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';

import store from './store';
import { Provider } from 'react-redux';

import TodoApp from './components/smart/TodoAppContainer';
import IndexPage from './components/smart/IndexPageContainer';
import TodoPage from './components/smart/TodoPageContainer';


// import todos from './todos'
// console.log('todos', todos.toJS());

const app = (

    <Provider store={store}>
        <Router>
            <Route path="/" component={TodoApp}>
                <IndexRoute component={IndexPage} />
                <Route path="todo/:uuid" component={TodoPage} />
            </Route>
        </Router>
    </Provider>
)


ReactDOM.render(
    app,
    document.getElementById('app')
)
