import React, { useEffect } from 'react'
import { AreaSafeAreaView } from './area.style';
import AreaListWrap from "../../shared/component/area-list";
import { IAreaProps } from "./area.interface";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../shared/reducer";
import { getAreaCodes } from "../app-shared/app-shared.reducer";

const Area = (props: IAreaProps) => {

    const {navigation} = props

    const dispatch = useDispatch()

    useEffect(() => {
        navigation.setOptions({
            headerTitle: "지역"
        })
        dispatch(getAreaCodes())
    }, [])

    const onPress = (select: any) => {
        navigation.navigate('AreaRegion', select);
    };

    const {areaCodeList, areaCodeLoad} = useSelector((state: IRootState) => {
        return {
            areaCodeList: state.appShared.areaCodes.data,
            areaCodeLoad: state.appShared.areaCodes.load
        }
    }, shallowEqual)

    return (
        <AreaSafeAreaView>
            <AreaListWrap areaCodeLoad={areaCodeLoad} areaCodeList={areaCodeList} onPress={onPress}/>
        </AreaSafeAreaView>
    )
}

export default Area
