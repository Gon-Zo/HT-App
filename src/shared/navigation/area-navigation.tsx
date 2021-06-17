import React, {memo} from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Area from "../../entity/area";
import AreaRegion from "../../entity/area/area-region";

const AreaStack = createStackNavigator()

const AreaNavigation = () => {
    return (
        <AreaStack.Navigator>
            <AreaStack.Screen name={"Area"} component={Area}/>
            <AreaStack.Screen name={"AreaRegion"} component={AreaRegion}/>
        </AreaStack.Navigator>
    )
}

export default memo(AreaNavigation)
