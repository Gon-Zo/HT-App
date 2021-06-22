import React, {useEffect} from 'react'
import {AreaSafeAreaView} from './area.style';
import AreaList from "../../shared/component/area-list";
import {IAreaProps} from "./area.interface";
import {AREA_DATA} from "../../shared/component/area-data";

const Area = (props: IAreaProps) => {

    const {navigation} = props

    useEffect(()=>{
        navigation.setOptions({
            headerTitle : "지역"
        })
    },[])

    const onPress = (key: string) => {
        navigation.navigate('AreaRegion', {key: key});
    };

    return (
        <AreaSafeAreaView>
            <AreaList areaCodeList={AREA_DATA}
                onPress={onPress}/>
        </AreaSafeAreaView>
    )
}

export default Area
