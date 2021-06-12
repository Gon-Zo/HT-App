import React, {memo} from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {Text, View} from "react-native";
import {NavigationContainer} from '@react-navigation/native'
import TapNavigation from "./tap-navigation";

const RootStack = createStackNavigator()

const MainModal = () => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Home Screen</Text>
        </View>
    );
}

const RootStackNavigation = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator>
                <RootStack.Screen name={"Tab"} component={TapNavigation}/>
                <RootStack.Screen name={"Modal"} component={MainModal}/>
            </RootStack.Navigator>
        </NavigationContainer>
    )
}

export default memo(RootStackNavigation)
