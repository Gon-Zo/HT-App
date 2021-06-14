import React, {memo} from 'react'
import ScrollLayout from "../../shared/component/scroll-layout";
import {Button, Text, View} from "react-native";

import {NavigationProp} from '@react-navigation/native';
import BarChart from "../../shared/chart/bar-chart";
import LineChart from "../../shared/chart/line-chart";

type HomeProps = {
    navigation: NavigationProp<any>
}

const Home = (props: HomeProps) => {

    const {navigation} = props

    return (
        <ScrollLayout>
            <View>
                <Button title={"onClick"} onPress={() => {
                    // Modal Screen
                    navigation.navigate("Modal")
                }}/>
                <BarChart/>
                <LineChart/>
            </View>
        </ScrollLayout>
    )
}


export default memo(Home);
