import React, {useEffect} from 'react'
import {AreaSafeAreaView} from './area.style';
import AreaList from "./area-list";
import {IAreaProps} from "./area.interface";

const Area = (props: IAreaProps) => {

    const {navigation} = props

    useEffect(()=>{
        navigation.setOptions({
            headerTitle : "지역"
        })
    },[])

    return (
        <AreaSafeAreaView>
            <AreaList navigation={navigation}/>
        </AreaSafeAreaView>
    )
}

export default Area
