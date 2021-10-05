import React, { useEffect } from 'react'
import { IDashboardProps } from "./dashboard.interface";
import { DashBoardSafeAreaView } from "./dashboard.style";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { TouchableOpacity, View } from "react-native";

const Dashboard = (props: IDashboardProps) => {

    const dispatch = useDispatch()

    const {navigation} = props

    useEffect(() => {
        navigation.setOptions({
            headerTitle: "대시보드",
        })
    }, [])

    const onPress = (select: any) => {
        navigation.navigate("DashboardDetail", select)
    }

    const goFilter = () => {
        navigation.navigate("Filter")
    }

    return (
        <DashBoardSafeAreaView>

            <View
                style={
                    {
                        alignItems: "flex-end",
                        paddingRight: 10
                    }
                }>
                <TouchableOpacity onPress={goFilter}>
                    <FontAwesomeIcon icon={['fas', 'filter']} size={17} color={'#000'}/>
                </TouchableOpacity>
            </View>

        </DashBoardSafeAreaView>
    )
}

export default Dashboard
