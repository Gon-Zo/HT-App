import React, {memo} from 'react'
import ScrollLayout from "../../shared/component/scroll-layout";
import {Button, Text, View} from "react-native";

import {NavigationProp} from '@react-navigation/native';

// import {LineChart} from 'react-native-charts-wrapper'

type HomeProps = {
    navigation: NavigationProp<any>
}

const Home = (props: HomeProps) => {

    const {navigation} = props

    return (
        <ScrollLayout>
            <View>
                <Text>
                    Hom Screen
                </Text>

                <Button title={"onClick"} onPress={() => {
                    // Modal Screen
                    navigation.navigate("Modal")
                }}/>

                {/*<LineChart data={{dataSets: [{label: "demo", values: [{y: 1}, {y: 2}, {y: 1}]}]}}*/}
                {/*/>*/}

            </View>
        </ScrollLayout>
    )
}


export default memo(Home);
