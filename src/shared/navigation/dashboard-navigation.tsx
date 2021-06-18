import React from "react";
import {createStackNavigator} from '@react-navigation/stack'
import Dashboard from "../../entity/dashboard";
import DashboardDetail from "../../entity/dashboard/dashboard-detail";

const DashboardStack = createStackNavigator()

const DashboardNavigation = (props: any) => {
    return (
        <DashboardStack.Navigator>
            <DashboardStack.Screen name={"Dashboard"} component={Dashboard}/>
            <DashboardStack.Screen name={"DashboardDetail"} component={DashboardDetail}/>
        </DashboardStack.Navigator>
    )
}

export default DashboardNavigation
