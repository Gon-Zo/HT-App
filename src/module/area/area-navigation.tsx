import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Area from './area';
import Search from '../search/search';
import AreaDetail from './area-detail';

const Stack = createStackNavigator();

const AreaNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={'Area'} component={Area}/>
            <Stack.Screen name={'Search'} component={Search}/>
            <Stack.Screen name={'AreaDetail'} component={AreaDetail}/>
        </Stack.Navigator>
    );
};

export default AreaNavigation;
