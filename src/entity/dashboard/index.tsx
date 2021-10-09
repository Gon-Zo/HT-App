import React, { useEffect } from 'react'
import { IDashboardProps } from "./dashboard.interface";
import { DashBoardSafeAreaView } from "./dashboard.style";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CardGroup from "../../shared/component/card-group";
import DashboardTable from "../../shared/component/dashboard-table";

const Dashboard = (props: IDashboardProps) => {

    const dispatch = useDispatch()

    const {navigation} = props

    useEffect(() => {
        navigation.setOptions({
            headerTitle: "대시보드",
            headerShown: false
        })
    }, [])

    const goFilter = () => {
        navigation.navigate("Filter")
    }

    return (
        <DashBoardSafeAreaView>

            <View style={
                    {
                        alignItems: "flex-end",
                        paddingRight: 10,
                    }}>
                {/*<Icon*/}
                {/*    size={25}*/}
                {/*    name='filter-alt'*/}
                {/*    type='material'*/}
                {/*    color='#000'*/}
                {/*    onPress={goFilter}*/}
                {/*/>*/}
            </View>

            <ScrollView style={{
                flex: 1
            }}>

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

                {/*<View style={*/}
                {/*    {*/}
                {/*        backgroundColor: "#f00",*/}
                {/*        flexDirection : "column"*/}
                {/*    }*/}
                {/*}>*/}
                {/*    <Text>*/}
                {/*        2020.02.01 ~ 2020.03.01*/}
                {/*    </Text>*/}
                {/*    <Text>*/}
                {/*        토지 거래*/}
                {/*    </Text>*/}
                {/*</View>*/}

                <CardGroup/>

                <DashboardTable/>

            </ScrollView>

        </DashBoardSafeAreaView>
    )
}


export default Dashboard
