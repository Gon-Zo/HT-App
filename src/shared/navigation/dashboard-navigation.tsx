import React from "react";
import {createStackNavigator} from '@react-navigation/stack'
import Dashboard from "../../entity/dashboard";
import DashboardDetail from "../../entity/dashboard/dashboard-detail";
import {SCREEN_OPTION} from "../utils/layout.utils";

const DashboardStack = createStackNavigator()

const DashboardNavigation = (props: any) => {
    return (
        <DashboardStack.Navigator screenOptions={SCREEN_OPTION}>
            <DashboardStack.Screen name={"Dashboard"} component={Dashboard}/>
            <DashboardStack.Screen name={"DashboardDetail"} component={DashboardDetail}/>
        </DashboardStack.Navigator>
    )
}

export default DashboardNavigation
