import React from 'react'
import {AppText} from "./component";
import {TouchableOpacity, View} from "react-native";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";

interface IChartLayoutProps {
    children: React.ReactNode,
    title: string,
    onPress: () => void
}

export const ChartLayout = (props: IChartLayoutProps) => {

    const {children, title, onPress} = props

    return (
        <React.Fragment>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 5
            }}>
                <AppText title={title} style={{fontSize: 18, paddingLeft: 8, paddingRight: 8}}/>
                <TouchableOpacity activeOpacity={1} onPress={onPress}>
                    <FontAwesomeIcon icon={["fas", "chevron-right"]}/>
                </TouchableOpacity>
            </View>
            {children}
        </React.Fragment>
    )

}
