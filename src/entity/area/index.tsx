import React, {useEffect} from 'react'
import {AreaSafeAreaView} from './area.style';
import AreaList from "../../shared/component/area-list";
import {IAreaProps} from "./area.interface";

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
            <AreaList onPress={onPress}/>
        </AreaSafeAreaView>
    )
}

export default Area
