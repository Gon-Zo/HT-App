import React, {useEffect} from 'react'
import {IDashboardProps} from "./dashboard.interface";
import AreaList from "../../shared/component/area-list";
import {DashBoardSafeAreaView} from "./dashboard.style";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {IRootState} from "../../shared/reducer";
import { getAreaCodes } from "../app-shared/app-shared.reducer";

const Dashboard = (props: IDashboardProps) => {

    const dispatch = useDispatch()

    const {navigation} = props

    useEffect(() => {

        navigation.setOptions({
            headerTitle: "대시보드",
        })

        dispatch(getAreaCodes())

    }, [])

    const onPress = (select: any) => {
        navigation.navigate("DashboardDetail", select)
    }

    const {areaCodeList} = useSelector((state: IRootState) => {
        return {
            areaCodeList: state.appShared.areaCodes.data
        }
    }, shallowEqual)

    return (
        <DashBoardSafeAreaView>
            <AreaList areaCodeList={areaCodeList} onPress={onPress}/>
        </DashBoardSafeAreaView>
    )
}

export default Dashboard
