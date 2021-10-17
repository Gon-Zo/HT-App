import React, { useEffect, useState } from 'react'
import { DashboardState, IDashboardProps } from "./dashboard.interface";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { IRootState } from "../../shared/reducer";
import { GlobalSafeAreaView, H1 } from "../../shared/component/component";
import { getByJeonseMonthlyRent } from "./dashboard.reducer";
import CardGroup from "./card-group";
import moment from "moment";
import { IFilterDate } from "../filter/filter.interface";
import { setBySelectDate } from "../../shared/reducer/shared.reducer";
import FilterModal from "./filter-modal";

const Dashboard = (props: IDashboardProps) => {

    const {navigation} = props

    const dispatch = useDispatch()

    const [state, setState] = useState<DashboardState>({
        isSelectDateAble: false,
        isFilterModal: false
    })

    const {selectDate, jeonseMonthlyRentData} = useSelector(({shared, dashboard}: IRootState) => {
        return {
            selectDate: shared.selectDate,
            jeonseMonthlyRentData: dashboard.jeonseMonthlyRentData
        }
    }, shallowEqual)

    useEffect(() => {
        navigation.setOptions({
            headerTitle: "대시보드",
            headerShown: false
        })
        toCallDashboardData(true)
        return () => {
        }
    }, [])

    useEffect(() => {

        const newState: DashboardState = {
            ...state,
            isSelectDateAble: Object.keys(selectDate).length != 0
        }

        setState(newState)

        toCallDashboardData()

    }, [selectDate])

    const toCallDashboardData = (isInitAble: boolean = false) => {

        if (isInitAble) {
            const nowDate = moment(new Date()).format("YYYY-MM-DD")

            const selectData: IFilterDate = {
                startDate: nowDate,
                endDate: nowDate
            }
            dispatch(setBySelectDate(selectData))
        }

        dispatch(getByJeonseMonthlyRent())
    }

    const toToggleModal = () => {
        const newState: DashboardState = {
            ...state,
            isFilterModal: !state.isFilterModal
        }
        setState(newState)
    }

    return (
        <GlobalSafeAreaView>
            <FilterModal
                startDate={selectDate.startDate}
                endDate={selectDate.endDate}
                isVisible={state.isFilterModal} toClose={toToggleModal}/>
            <View style={styles.headerWrap}>
                <View style={styles.headerBox}>
                    <H1 text={'서울시'}/>
                    {
                        state.isSelectDateAble &&
                        (
                            <Text style={styles.dateText}>{selectDate.startDate} ~ {selectDate.endDate}</Text>
                        )
                    }
                </View>
                <TouchableOpacity
                    style={[styles.btn, styles.shadow]}
                    onPress={toToggleModal}>
                    <FontAwesomeIcon size={18}
                                     icon={['fas', 'filter']}
                                     color={'#000'}/>
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.scrolWrap}>
                <CardGroup data={jeonseMonthlyRentData}/>
            </ScrollView>
        </GlobalSafeAreaView>
    )
}

const styles = StyleSheet.create({
    headerWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10
    },
    headerBox: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    dateText: {
        paddingLeft: 10,
        color: '#989898'
    },
    btn: {
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 5
    },
    scrolWrap: {
        flex: 1
    },
    shadow: {
        ...Platform.select({
            ios: {
                shadowColor: '#4d4d4d',
                shadowOffset: {width: 1, height: 0,},
                shadowOpacity: 0.2,
                shadowRadius: 5,
            }, android: {elevation: 8,},
        }),
    },
})


export default Dashboard
