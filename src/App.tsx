import React from 'react';
import {Provider} from 'react-redux';
import store from './config/store';
import Count from './module/count/count';

const App = () => {
    return (
        <Provider store={store}>
            <Count/>
        </Provider>
    );
};

export default App;
