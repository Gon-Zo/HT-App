import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Main from '../../module/main/main';
import 'react-native-gesture-handler';
import Search from '../../module/search/search';
import {IStackMainNavigation} from './main.interface';

const Stack = createStackNavigator();

const StackMainNavigation = (props: IStackMainNavigation) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Main"
                component={Main}
            />
            <Stack.Screen name="Search"
                          component={Search}/>
        </Stack.Navigator>
    );
};

export default StackMainNavigation;
