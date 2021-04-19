import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Area from './area';
import Search from '../search/search';
import AreaRegion from './area-region';
import {StackParamList} from './area.interface';
import AreaDetail from './area-detail';

const Stack = createStackNavigator<StackParamList>();

const AreaNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={"Area"} component={Area}/>
            <Stack.Screen name={"Search"} component={Search}/>
            <Stack.Screen name={"AreaRegion"} component={AreaRegion}/>
            <Stack.Screen name={"AreaDetail"} component={AreaDetail}/>
        </Stack.Navigator>
    );
};

export default AreaNavigation;
