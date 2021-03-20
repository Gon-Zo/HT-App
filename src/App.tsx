import React from 'react';
import {Provider} from 'react-redux';
import store from './config/store';
import HtNavigation from './shared/assest/ht-navigation';

const App = () => {
    return (
        <Provider store={store}>
            <HtNavigation/>
        </Provider>
    );
};

export default App;
