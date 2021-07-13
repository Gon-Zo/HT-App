import React, {memo} from 'react'
import ScrollLayout from "../../shared/component/scroll-layout";
import {Text, View} from "react-native";

const Around = (props: any) => {
    return (
        <ScrollLayout
            stickyList={[]}>
            <View>
                <Text>
                    Around Screen
                </Text>
            </View>
        </ScrollLayout>
    )
}

export default memo(Around)
