import React, { useEffect, useState } from 'react'
import { IDashboardProps } from "./dashboard.interface";
import { FilterWrap } from "./dashboard.style";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import CardGroup from "../../shared/component/card-group";
import DashboardTable from "../../shared/component/dashboard-table";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { IRootState } from "../../shared/reducer";
import { GlobalSafeAreaView } from "../../shared/component/component";
import { CardDataList } from "../../shared/utils/empty-data.utils";

type DashboardState = {
    isSelectDateAble: boolean
}

const Dashboard = (props: IDashboardProps) => {

    const {navigation} = props

    const dispatch = useDispatch()

    const [state, setState] = useState<DashboardState>({
        isSelectDateAble: false
    })

    const {selectDate} = useSelector(({shared}: IRootState) => {
        return {
            selectDate: shared.selectDate
        }
    }, shallowEqual)

    useEffect(() => {

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
        <GlobalSafeAreaView>

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
                    padding: 7,
                    flexDirection: "row",
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
                        state.isSelectDateAble &&
                        (
                            <Text style={{
                                paddingLeft: 10,
                                color: '#989898'
                            }}> {selectDate.startDate} ~ {selectDate.endDate}</Text>
                        )
                    }
                </View>

                <View style={{
                    padding: 5
                }}>
                    <CardGroup cardData={CardDataList}/>
                    <DashboardTable/>
                </View>

            </ScrollView>
        </GlobalSafeAreaView>
    )
}


export default Dashboard
