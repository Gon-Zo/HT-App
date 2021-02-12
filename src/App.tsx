import React from 'react';
import Count from "../src/module/count/count";
import {createStore , applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './shared/reducer';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';


const defaultMiddlewares = [
    thunkMiddleware,
    logger,
    promiseMiddleware
];

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...defaultMiddlewares)));

const App = () => {
    return (
        <Provider store={store}>
            <Count/>
        </Provider>
    );
};

export default App;
