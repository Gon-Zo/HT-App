import React, {memo} from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Area from "../../entity/area";
import AreaRegion from "../../entity/area/area-region";
import {SCREEN_OPTION} from "../utils/layout.utils";

const AreaStack = createStackNavigator()

const AreaNavigation = () => {
    return (
        <AreaStack.Navigator
            screenOptions={SCREEN_OPTION}>
            <AreaStack.Screen name={"Area"} component={Area}/>
            <AreaStack.Screen name={"AreaRegion"} component={AreaRegion}/>
        </AreaStack.Navigator>
    )
}

export default memo(AreaNavigation)
