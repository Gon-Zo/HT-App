import React from 'react';
import Count from "../src/module/count/count";
import {Provider} from 'react-redux';
import store from './config/store';

const App = () => {
    return (
        <Provider store={store}>
            <Count/>
        </Provider>
    );
};

export default App;
