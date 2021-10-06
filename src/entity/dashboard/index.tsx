import React, { useEffect } from 'react'
import { IDashboardProps } from "./dashboard.interface";
import { DashBoardSafeAreaView } from "./dashboard.style";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

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

            </ScrollView>

        </DashBoardSafeAreaView>
    )
}

const CardGroup = (props: any) => {

    return (
        <View style={{marginTop: 10}}>

            <View style={{
                paddingLeft : 10
            }}>
                <Text style={
                    {
                        fontSize: 17,
                        fontWeight: '600'
                    }
                }>아파트 전월세</Text>
            </View>

            <View style={{
                flexDirection: "row",
                height: 150,
            }}>
                <View style={
                    [{
                        backgroundColor: "tomato",
                    }, styles.cardWrap]
                }>
                    <Text style={[styles.cardText]}>신동아블루아광화문의 꿈</Text>
                    <Text style={[styles.cardText]}>월세: 300</Text>
                    <Text style={[styles.cardText]}>보증금: 60,000</Text>
                </View>
                <View style={[{
                    backgroundColor: "orange"
                }, styles.cardWrap]}>
                    <Text style={[styles.cardText]}>광화문풍림스페이스본(101동~105동)</Text>
                    <Text style={[styles.cardText]}>월세: 300</Text>
                    <Text style={[styles.cardText]}>보증금: 60,000</Text>
                </View>
                <View style={[
                    {
                        backgroundColor: "gold",
                    }, styles.cardWrap]}>
                    <Text style={[styles.cardText]}>광화문풍림스페이스본(101동~105동)</Text>
                    <Text style={[styles.cardText]}>월세: 300</Text>
                    <Text style={[styles.cardText]}>보증금: 60,000</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardWrap: {
        flex: 1,
        margin: 5,
        borderRadius: 8
    },
    cardText: {
        color: '#fff'
    }
})

export default Dashboard
