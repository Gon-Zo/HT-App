import React from 'react';
import {Provider} from 'react-redux';
import Count from "./entity/count/count";
import store from './config/store';

const App = () => {
    return (
        <Provider store={store}>
            <Count/>
        </Provider>
    )
}

export default App;
