import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Around from './around';
import {NAV} from '../../shared/utils/navigation-utils';
import Search from '../search/search';

const Stack = createStackNavigator();

const AroundNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={NAV.AROUND} component={Around}/>
            <Stack.Screen name={NAV.SEARCH} component={Search}/>
        </Stack.Navigator>
    );
};

export default AroundNavigation
