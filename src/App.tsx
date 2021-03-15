import React from 'react';
import {Provider} from 'react-redux';
import store from './config/store';
import Main from './module/main';

const App = () => {
    return (
        <Provider store={store}>
            <Main/>
        </Provider>
    );
};

export default App;
