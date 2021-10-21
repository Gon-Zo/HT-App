import React, { useEffect, useState } from 'react'
import { DashboardState, IDashboardProps, IFilterDate } from "./dashboard.interface";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { IRootState } from "../../shared/reducer";
import { GlobalSafeAreaView, H1 } from "../../shared/component/component";
import {
    getByApartmentRent,
    getByRealEstateTradingCount,
    setByRegion,
    setBySelectDate,
    setBySelectRegion, setByTransactionType
} from "./dashboard.reducer";
import CardGroup from "./card-group";
import moment from "moment";
import FilterModal from "./filter-modal";
import { areaCodes, transactionType } from "../../shared/utils/data.utils";
import RealEstateTradingCountChart from "./real-estate-trading-count.chart";
import RealEstateTradingCountDealerChart from "./real-estate-trading-count-dealer.chart";

const Dashboard = (props: IDashboardProps) => {

    const {navigation} = props

    const dispatch = useDispatch()

    const [state, setState] = useState<DashboardState>({
        isSelectDateAble: false,
        isFilterModal: false
    })

    const {
        transactionTypeObj,
        region,
        selectDate,
        selectRegion,
        apartmentRent,
        realEstateTradingCount
    } = useSelector(({dashboard}: IRootState) => {
        return {
            transactionTypeObj: dashboard.transactionType,
            region: dashboard.region,
            selectDate: dashboard.selectDate,
            apartmentRent: dashboard.apartmentRent,
            selectRegion: dashboard.selectRegion,
            realEstateTradingCount: dashboard.realEstateTradingCount
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
            dispatch(setByTransactionType(transactionType[0]))
            dispatch(setByRegion(areaCode))
            dispatch(setBySelectRegion({main: areaCode}))
            dispatch(setBySelectDate(_selectDate))
        }

        dispatch(getByApartmentRent())
        dispatch(getByRealEstateTradingCount())
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
                transactionTypeData={transactionTypeObj}
                region={selectRegion}
                startDate={selectDate.startDate}
                endDate={selectDate.endDate}
                isVisible={state.isFilterModal}
                toClose={toToggleModal}/>
            <View style={styles.headerWrap}>
                <View style={styles.headerBox}>
                    {/*// @ts-ignore*/}
                    <H1 text={region.name}/>
                    <View style={{
                        flexDirection: 'column',
                        paddingLeft: 10,
                        justifyContent: "center"
                    }}>
                        <Text style={{
                            color: '#989898',
                            fontWeight: "600"
                        }}>{transactionTypeObj.label}</Text>
                        {
                            state.isSelectDateAble &&
                            (
                                <Text style={styles.dateText}>{selectDate.startDate} ~ {selectDate.endDate}</Text>
                            )
                        }
                    </View>
                </View>
                <TouchableOpacity
                    style={[styles.btn, styles.shadow]}
                    onPress={toToggleModal}>
                    <FontAwesomeIcon size={18}
                                     icon={['fas', 'filter']}
                                     color={'#000'}/>
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.scrollWrap}>
                <CardGroup data={apartmentRent}/>
                <RealEstateTradingCountChart data={realEstateTradingCount}/>
                <RealEstateTradingCountDealerChart/>
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
        color: '#989898',
        fontSize: 12
    },
    btn: {
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 5
    },
    scrollWrap: {
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
