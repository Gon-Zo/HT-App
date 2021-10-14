import React, { memo } from "react";
import 'react-native-gesture-handler';
import Home from "../../entity/home";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import DashboardNavigation from "./dashboard-navigation";
import News from "../../entity/news";

const Tap = createBottomTabNavigator()

const TabNavigation = (props: any) => {
    return (
        <Tap.Navigator
            tabBarOptions={
                {
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray',
                    showLabel: false
                }
            }
        >
            <Tap.Screen name={"홈"}
                        component={Home}
                        options={{
                            tabBarIcon: ({focused, color, size}) => {
                                return <FontAwesomeIcon
                                    color={color}
                                    icon={['fas', "home"]}
                                    size={size}/>;
                            }
                        }}/>
            <Tap.Screen name={"대시보드"}
                        component={DashboardNavigation}
                        options={{
                            tabBarIcon: ({focused, color, size}) => {
                                return <FontAwesomeIcon
                                    color={color}
                                    icon={['fas', "chart-line"]}
                                    size={size}/>;
                            }
                        }}/>
            <Tap.Screen name={"지역"}
                        component={News}
                        options={{
                            tabBarIcon: ({focused, color, size}) => {
                                return <FontAwesomeIcon
                                    color={color}
                                    icon={["far", "map"]}
                                    size={size}/>;
                            }
                        }}/>
            {/*/!*<Tap.Screen name={"내주변"}*!/*/}
            {/*/!*            component={Around}*!/*/}
            {/*/!*            options={{*!/*/}
            {/*/!*                tabBarIcon: ({focused, color, size}) => {*!/*/}
            {/*/!*                    return <FontAwesomeIcon*!/*/}
            {/*/!*                        color={color}*!/*/}
            {/*/!*                        icon={["fas", "map-marker-alt"]}*!/*/}
            {/*/!*                        size={size}*!/*/}
            {/*/!*                    />*!/*/}
            {/*/!*                }*!/*/}
            {/*/!*            }}/>*!/*/}
        </Tap.Navigator>
    )
}

export default memo(TabNavigation)
