import React from 'react'
import {SafeAreaView, Text, View} from "react-native";
import {IDashboardProps} from "./dashboard.interface";
import AreaList from "../../shared/component/area-list";

const Dashboard = (props: IDashboardProps) => {

    return (
        <SafeAreaView style={
            {
                flex : 1,
                backgroundColor : "#fff"
            }
        }>
            <AreaList onPress={() => null}/>
        </SafeAreaView>
    )
}

export default Dashboard
