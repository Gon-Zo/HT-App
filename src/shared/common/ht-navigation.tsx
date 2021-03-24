import React from 'react';
import {IHtNavigation} from './interface/common.interface';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackMainNavigation from './stack-main-navigation';
import {Text, View} from 'react-native';

const Tab = createBottomTabNavigator();

const SettingsScreen = () =>{
    return (
        <View>
            <Text>TEST</Text>
        </View>
    )
}

const HtNavigation = (props: IHtNavigation) => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={StackMainNavigation} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default HtNavigation;
