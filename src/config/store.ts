import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import logger from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../shared/reducer';
import {createPromise} from 'redux-promise-middleware';

const promiseMiddleware = createPromise({
    promiseTypeSuffixes: ['REQUEST', 'SUCCESS', 'FAILURE'],
});

const defaultMiddlewares = [
    thunkMiddleware,
    logger,
    promiseMiddleware,
];

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...defaultMiddlewares)));

export default store
