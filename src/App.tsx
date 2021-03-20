import React from 'react';
import {Provider} from 'react-redux';
import store from './config/store';
import Main from './module/main/main';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Main/>
            </NavigationContainer>
        </Provider>
    );
};

export default App;
