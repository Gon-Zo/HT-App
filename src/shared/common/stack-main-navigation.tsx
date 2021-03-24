import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Main from '../../module/main/main';
import 'react-native-gesture-handler';
import Search from '../../module/search/search';
import {IHtNavigation} from './interface/common.interface';

const Stack = createStackNavigator();

const StackMainNavigation = (props: IHtNavigation) => {
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
