import React, {memo} from 'react'
import {AreaSafeAreaView} from './area.style';
import AreaList from "./area-list";
import {IAreaProps} from "./area.interface";
import {HeaderComponent} from "../../shared/component/component";

const Area = (props: IAreaProps) => {

    const {navigation} = props

    return (
        <AreaSafeAreaView>
            <HeaderComponent title={"지역"}/>
            <AreaList navigation={navigation}/>
        </AreaSafeAreaView>
    )
}

export default memo(Area)
