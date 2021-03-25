import React from 'react';
import {IHtNavigation} from './interface/common.interface';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StackMainNavigation from './stack-main-navigation';
import {Text, View} from 'react-native';
import ScrollerLayout from './scroller-layout';

const Tab = createBottomTabNavigator();

const TempView = () => {
    return (
        <ScrollerLayout>
            <View>
                <Text>TEST</Text>
            </View>
        </ScrollerLayout>
    );
};

const HtNavigation = (props: IHtNavigation) => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="홈" component={StackMainNavigation}/>
                <Tab.Screen name="지역" component={TempView}/>
                <Tab.Screen name="내주변" component={TempView}/>
                <Tab.Screen name="My 세팅" component={TempView}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default HtNavigation;
