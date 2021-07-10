import React from 'react';
import {Provider} from 'react-redux';
import store from './config/store.config';
import Count from "./entity/count";

const App = () => {
    return (
        <Provider store={store}>
            <Count/>
        </Provider>
    )
}


export default App;
