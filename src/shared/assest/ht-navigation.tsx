import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Main from '../../module/main/main';
import 'react-native-gesture-handler';
import Search from '../../module/search/search';

const Stack = createStackNavigator();

const HtNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Main" component={Main}/>
                <Stack.Screen name="Search" component={Search}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default HtNavigation;
