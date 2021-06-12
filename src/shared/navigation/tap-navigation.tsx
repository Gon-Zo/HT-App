import React, {memo} from "react";
import 'react-native-gesture-handler';
import Home from "../../entity/home";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Area from "../../entity/area";
import Around from "../../entity/around";

const Tap = createBottomTabNavigator()

const TapNavigation = (props: any) => {
    return (
        <Tap.Navigator>
            <Tap.Screen name={"Home"} component={Home}/>
            <Tap.Screen name={"Area"} component={Area}/>
            <Tap.Screen name={"Around"} component={Around}/>
        </Tap.Navigator>
    )
}

export default memo(TapNavigation)
