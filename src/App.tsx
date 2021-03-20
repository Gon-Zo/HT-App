import React from 'react';
import {Provider} from 'react-redux';
import store from './config/store';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Main from './module/main/main';

const Stack = createStackNavigator();

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Main" component={Main}/>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default App;
