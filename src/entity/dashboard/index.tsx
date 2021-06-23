import React, {useEffect} from 'react'
import {IDashboardProps} from "./dashboard.interface";
import AreaList from "../../shared/component/area-list";
import {DashBoardSafeAreaView} from "./dashboard.style";
import {useDispatch, useSelector} from "react-redux";
import {getAreaCodes} from "./dashboard.reducer";
import {IRootState} from "../../shared/reducer";

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
            areaCodeList: state.dashboard.areaCodes.data
        }
    },)

    return (
        <DashBoardSafeAreaView>
            <AreaList areaCodeList={areaCodeList}
                      onPress={onPress}/>
        </DashBoardSafeAreaView>
    )
}

export default Dashboard
