import React, {memo} from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import TapNavigation from "./tap-navigation";
import Search from "../../entity/search";

const RootStack = createStackNavigator()

const RootStackNavigation = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator mode={"modal"} headerMode={"none"}>
                <RootStack.Screen name={"Tap"} component={TapNavigation}/>
                <RootStack.Screen name={"Modal"} component={Search}/>
            </RootStack.Navigator>
        </NavigationContainer>
    )
}

export default memo(RootStackNavigation)
