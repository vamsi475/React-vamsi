import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import reducer from './ReduxStore/Reducers/Reducer';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import watchGetData from './ReduxStore/Sagas/Saga';
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'font-awesome/css/font-awesome.css';
import Routing from './Router/Routing';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk, sagaMiddleware)));
sagaMiddleware.run(watchGetData)

ReactDOM.render(
    <Provider store={store}>
        <Routing />
    </Provider>, document.getElementById('root'));


serviceWorker.unregister();
