import React from 'react'
import { Text, View, SafeAreaView } from "react-native";
import { BackButton } from "../../shared/component/component";

const Filter = (props: any) => {

    const {navigation} = props

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: "#fff",
            flexDirection: "column"
        }}>
            <BackButton navigation={navigation}/>
            <View>
                <Text>
                    TEST
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default React.memo(Filter)
