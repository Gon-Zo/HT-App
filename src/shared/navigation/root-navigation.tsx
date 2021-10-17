import React, { memo, useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigation from "./tab-navigation";

const RootStack = createStackNavigator()

const RootStackNavigation = () => {

    useEffect(() => {
    }, [])

    return (
        <NavigationContainer>
            <RootStack.Navigator mode={"modal"} headerMode={"none"}>
                <RootStack.Screen name={"Tap"} component={TabNavigation}/>
            </RootStack.Navigator>
        </NavigationContainer>
    )
}

export default memo(RootStackNavigation)
