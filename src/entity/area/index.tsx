import React, {memo} from 'react'
import ScrollLayout from "../../shared/component/scroll-layout";
import {Text, View} from "react-native";

const Area = (props: any) => {
    return (
        <ScrollLayout>
            <View>
                <Text>Area Screen</Text>
            </View>
        </ScrollLayout>
    )
}

export default memo(Area)
