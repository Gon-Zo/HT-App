import React, { useEffect, useState } from 'react'
import { DashboardState, IDashboardProps, IFilterDate } from "./dashboard.interface";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { IRootState } from "../../shared/reducer";
import { GlobalSafeAreaView, H1 } from "../../shared/component/component";
import { getByJeonseMonthlyRent, setByRegion, setBySelectDate, setBySelectRegion } from "./dashboard.reducer";
import CardGroup from "./card-group";
import moment from "moment";
import FilterModal from "./filter-modal";
import { areaCodes } from "../../shared/utils/data.utils";

const Dashboard = (props: IDashboardProps) => {

    const {navigation} = props

    const dispatch = useDispatch()

    const [state, setState] = useState<DashboardState>({
        isSelectDateAble: false,
        isFilterModal: false
    })

    const {
        transactionType,
        region,
        selectDate,
        jeonseMonthlyRentData,
        selectRegion
    } = useSelector(({dashboard}: IRootState) => {
        return {
            transactionType: dashboard.transactionType,
            region: dashboard.region,
            selectDate: dashboard.selectDate,
            jeonseMonthlyRentData: dashboard.jeonseMonthlyRentData,
            selectRegion: dashboard.selectRegion
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

            const _selectDate: IFilterDate = {
                startDate: nowDate,
                endDate: nowDate
            }

            const areaCode = {
                id: areaCodes[0].id,
                code: areaCodes[0].code,
                name: areaCodes[0].name,
                type: areaCodes[0].type,
            }

            dispatch(setByRegion(areaCode))
            dispatch(setBySelectRegion({main: areaCode}))
            dispatch(setBySelectDate(_selectDate))
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
                region={selectRegion}
                startDate={selectDate.startDate}
                endDate={selectDate.endDate}
                isVisible={state.isFilterModal}
                toClose={toToggleModal}/>
            <View style={styles.headerWrap}>
                <View style={styles.headerBox}>
                    {/*// @ts-ignore*/}
                    <H1 text={region.name}/>
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
