import React, { useEffect, useState } from 'react'
import { IDashboardProps } from "./dashboard.interface";
import { DashBoardSafeAreaView } from "./dashboard.style";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CardGroup from "../../shared/component/card-group";
import DashboardTable from "../../shared/component/dashboard-table";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import styled from "styled-components/native";
import { IRootState } from "../../shared/reducer";
import { getAreaCodes } from "../app-shared/app-shared.reducer";

const FilterWrap = styled.View`
align-items: flex-end;
padding-right: 10px;
`;

type DashboardState = {
    isSelectDateAble: boolean
}

const Dashboard = (props: IDashboardProps) => {

    const {navigation} = props

    const dispatch = useDispatch()

    const [state, setState] = useState<DashboardState>({
        isSelectDateAble: false
    })

    const {selectDate} = useSelector((state: IRootState) => {
        return {
            selectDate: state.filter.selectDate
        }
    }, shallowEqual)

    useEffect(() => {

        dispatch(getAreaCodes())

        navigation.setOptions({
            headerTitle: "대시보드",
            headerShown: false
        })
        return () => {
        }
    }, [])

    useEffect(() => {

        const newState: DashboardState = {
            ...state,
            isSelectDateAble: Object.keys(selectDate).length != 0
        }

        setState(newState)

    }, [selectDate])

    const goFilter = () => {
        navigation.navigate("Filter")
    }

    return (
        <DashBoardSafeAreaView>

            <FilterWrap>
                <TouchableOpacity onPress={goFilter}>
                    <FontAwesomeIcon size={18}
                                     icon={['fas', 'filter']}
                                     color={'#000'}/>
                </TouchableOpacity>
            </FilterWrap>

            <ScrollView
                style={{
                    flex: 1
                }}>
                <View style={{
                    padding: 10,
                    flexDirection: "row",
                    alignItems: "baseline",
                }}>
                    <Text style={
                        {
                            fontSize: 27,
                            fontWeight: "bold",
                        }
                    }>
                        서울시
                    </Text>
                    {
                        state.isSelectDateAble ?
                            <Text style={{
                                paddingLeft: 10,
                                color: '#989898'
                            }}> {selectDate.startDate} ~ {selectDate.endDate}</Text> : null
                    }
                </View>

                <CardGroup/>

                <DashboardTable/>

            </ScrollView>

        </DashBoardSafeAreaView>
    )
}


export default Dashboard
