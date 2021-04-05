import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store/storefile';
import Home from './conatiner/Home';

// view connect to store
ReactDOM.render(
    <Provider store={store}>
        <Home/>
    </Provider>, document.getElementById('root')
)