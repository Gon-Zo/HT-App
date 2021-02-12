import React from 'react';
import Count from "../src/module/count/count";

import {createStore , applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './shared/reducer';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk, logger)));

/*
https://www.naver.com/include/newsstand/press_info_data.json
 */

const App = () => {
    return (
        <Provider store={store}>
            <Count/>
        </Provider>
    );
};

export default App;
