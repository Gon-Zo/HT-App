import React from 'react';
import Count from "./module/count";

import {createStore , applyMiddleware} from 'redux';
// @ts-ignore
import {Provider} from 'react-redux';
import rootReducer from './shared/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

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
