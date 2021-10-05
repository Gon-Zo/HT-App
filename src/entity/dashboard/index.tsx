import React, { useEffect } from 'react'
import { IDashboardProps } from "./dashboard.interface";
import { DashBoardSafeAreaView } from "./dashboard.style";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

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
                        paddingRight: 10,
                    }
                }>
                <TouchableOpacity onPress={goFilter}>
                    <FontAwesomeIcon icon={['fas', 'filter']} size={17} color={'#000'}/>
                </TouchableOpacity>
            </View>

            <ScrollView style={
                {
                    flex : 1
                }
            }>

                <View style={{
                    padding: 10
                }}>
                    <Text style={
                        {
                            fontSize: 27,
                            fontWeight: "bold",
                        }
                    }>
                        서울시
                    </Text>
                </View>

                <View style={
                    {
                        backgroundColor: "#f00",
                        flexDirection : "column"
                    }
                }>

                    <Text>
                        2020.02.01 ~ 2020.03.01
                    </Text>

                    <Text>
                        토지 거래
                    </Text>

                </View>

                <View>
                    <View>
                        <Text>TEST</Text>
                    </View>
                    <View>
                        <Text>TEST</Text>
                    </View>
                </View>

            </ScrollView>

        </DashBoardSafeAreaView>
    )
}

export default Dashboard
