import React, {memo} from 'react'
import {AreaSafeAreaView} from './area.style';
import AreaList from "./area-list";
import {IAreaProps} from "./area.interface";

const Area = (props: IAreaProps) => {

    const {navigation} = props

    return (
        <AreaSafeAreaView>
            <AreaList navigation={navigation}/>
        </AreaSafeAreaView>
    )
}

export default memo(Area)
