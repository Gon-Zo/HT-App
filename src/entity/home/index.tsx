import React, {memo} from 'react'
import ScrollLayout from "../../shared/component/scroll-layout";
import {Button, Text, View} from "react-native";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import {NavigationProp} from '@react-navigation/native';

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

                <FontAwesomeIcon icon={faCoffee} />

                <Button title={"onClick"} onPress={() => {
                    // Modal Screen
                    navigation.navigate("Modal")
                }}/>
            </View>
        </ScrollLayout>
    )
}


export default memo(Home);
