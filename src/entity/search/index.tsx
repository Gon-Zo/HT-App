import React, {memo} from 'react'
import {Button, Text, View} from "react-native";
import {NavigationProp} from "@react-navigation/native";

type SearchProps = {
    navigation: NavigationProp<any>
}

const Search = (props: SearchProps) => {

    const {navigation} = props

    const onPress = () => {
        navigation.navigate("Tap")
    }

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>
                Search Screen
                <Button title={"Go back"} onPress={onPress}/>
            </Text>
        </View>
    )
}

export default memo(Search)
