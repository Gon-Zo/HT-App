import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Area from './area';
import Search from '../search/search';
import AreaDetail from './area-detail';
import {NAV} from '../../shared/utils/navigation-utils';

const Stack = createStackNavigator();

const AreaNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={NAV.AREA} component={Area}/>
            <Stack.Screen name={NAV.SEARCH} component={Search}/>
            <Stack.Screen name={NAV.AREA_DETAIL} component={AreaDetail}/>
        </Stack.Navigator>
    );
};

export default AreaNavigation;
