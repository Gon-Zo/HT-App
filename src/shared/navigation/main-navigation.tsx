import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Main from '../../entity/main';
import 'react-native-gesture-handler';
// import Search from '../../module/search/search';
// import {IMainNavigationProps} from './main.interface';
import {NAV} from '../utils/navigation-utils';
import {IMainNavigationProps} from "../../entity/main/main.interface";

const Stack = createStackNavigator();

const MainNavigation = (props: IMainNavigationProps) => {

    return (
        <Stack.Navigator>
            <Stack.Screen name={NAV.HOME} component={Main}/>
            {/*<Stack.Screen name={NAV.SEARCH} component={Search}/>*/}
        </Stack.Navigator>
    );
};

export default MainNavigation;
