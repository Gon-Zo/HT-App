import React, {useEffect} from 'react'
import {IDashboardProps} from "./dashboard.interface";
import AreaList from "../../shared/component/area-list";
import {DashBoardSafeAreaView} from "./dashboard.style";
import {useDispatch} from "react-redux";
import {getAreaCodes} from "./dashboard.reducer";

const Dashboard = (props: IDashboardProps) => {

    const dispatch = useDispatch()

    const {navigation} = props

    useEffect(() => {

        navigation.setOptions({
            headerTitle : "대시보드",
        })

        dispatch(getAreaCodes())

    }, [])

    const onPress = (key: string) => {
        const params = {
            key
        }
        navigation.navigate("DashboardDetail", params)
    }

    return (
        <DashBoardSafeAreaView>
            <AreaList onPress={onPress}/>
        </DashBoardSafeAreaView>
    )
}

export default Dashboard
