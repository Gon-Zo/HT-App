import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, View} from 'react-native';
import ScrollerLayout from './scroller-layout';
import Icon from 'react-native-vector-icons/FontAwesome';
import MainNavigation from '../../module/main/main-navigation';
import AreaNavigation from '../../module/area/area-navigation';
import AroundNavigation from '../../module/around/around-navigation';

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

const HtNavigation = (props: any) => {
    return (
        <NavigationContainer>
            {/*<Tab.Navigator tabBar={(props: BottomTabBarProps<any>) => <MyTabBar {...props}/>}>*/}
            <Tab.Navigator>
                <Tab.Screen name="홈"
                            component={MainNavigation}
                            options={{
                                tabBarIcon: ({focused, color, size}) =>
                                    <Icon name="home" size={size} color={color}/>,
                            }}
                />
                <Tab.Screen name="지역"
                            component={AreaNavigation}
                            options={{
                                tabBarIcon: ({focused, color, size}) =>
                                    <Icon name="map-marker" size={size} color={color}/>,
                            }}
                />
                <Tab.Screen name="내주변"
                            component={AroundNavigation}
                            options={{
                                tabBarIcon: ({focused, color, size}) =>
                                    <Icon name="map-o" size={size} color={color}/>,
                            }}
                />
                <Tab.Screen name="My 세팅"
                            component={TempView}
                            options={{
                                tabBarIcon: ({focused, color, size}) =>
                                    <Icon name="ellipsis-h" size={size} color={color}/>,
                            }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default HtNavigation;
