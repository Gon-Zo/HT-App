import React, {memo} from "react";
import 'react-native-gesture-handler';
import Home from "../../entity/home";
import Around from "../../entity/around";

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import AreaNavigation from "./area-navigation";
import DashboardNavigation from "./dashboard-navigation";

const Tap = createBottomTabNavigator()

const TapNavigation = (props: any) => {
    return (
        <Tap.Navigator>
            <Tap.Screen name={"홈"}
                        component={Home}
                        options={{
                            tabBarIcon: ({focused, color, size}) => {
                                return <FontAwesomeIcon
                                    color={color}
                                    icon={['fas', "home"]}
                                    size={size}/>;
                            }
                        }}
            />
            <Tap.Screen name={"대시보드"}
                        component={DashboardNavigation}
                        options={{
                            tabBarIcon: ({focused, color, size}) => {
                                return <FontAwesomeIcon
                                    color={color}
                                    icon={['fas', "chart-line"]}
                                    size={size}/>;
                            }
                        }}
            />
            <Tap.Screen name={"지역"}
                        component={AreaNavigation}
                        options={{
                            tabBarIcon: ({focused, color, size}) => {
                                return <FontAwesomeIcon
                                    color={color}
                                    icon={["far", "map"]}
                                    size={size}/>;
                            }
                        }}
            />
            <Tap.Screen name={"내주변"}
                        component={Around}
                        options={{
                            tabBarIcon: ({focused, color, size}) => {
                                return <FontAwesomeIcon
                                    color={color}
                                    icon={["fas", "map-marker-alt"]}
                                    size={size}
                                />
                            }
                        }}
            />
        </Tap.Navigator>
    )
}

export default memo(TapNavigation)
