import React from 'react';
import {Provider} from 'react-redux';
import store from './config/store';
import RootStackNavigation from "./shared/navigation/root-navigation";

const App = () => {
    return (
        <Provider store={store}>
            <RootStackNavigation/>
        </Provider>
    )
}

export default App;
