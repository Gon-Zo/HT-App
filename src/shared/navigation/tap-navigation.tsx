import React, {memo} from "react";
import 'react-native-gesture-handler';
import Home from "../../entity/home";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

const Tap = createBottomTabNavigator()

const TapNavigation = (props: any) => {

    return (
        <Tap.Navigator>
            <Tap.Screen name={"Home"} component={Home}/>
        </Tap.Navigator>
    )
}


export default memo(TapNavigation)
