import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Main from '../../module/main/main';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

const HtNavigation = (props : any) => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Main" component={Main}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default HtNavigation
