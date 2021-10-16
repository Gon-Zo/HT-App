import React from "react";
import { createStackNavigator } from '@react-navigation/stack'
import Dashboard from "../../entity/dashboard";
import { SCREEN_OPTION } from "../utils/layout.utils";

const DashboardStack = createStackNavigator()

const DashboardNavigation = (props: any) => {
    return (
        <DashboardStack.Navigator screenOptions={SCREEN_OPTION}>
            <DashboardStack.Screen name={"Dashboard"} component={Dashboard}/>
        </DashboardStack.Navigator>
    )
}

export default DashboardNavigation
