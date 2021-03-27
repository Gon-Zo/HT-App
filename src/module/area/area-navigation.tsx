import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Area from './area';
import Search from '../search/search';

const Stack = createStackNavigator();

const AreaNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={'Area'} component={Area}/>
            <Stack.Screen name={'Search'} component={Search}/>
        </Stack.Navigator>
    );
};

export default AreaNavigation;
