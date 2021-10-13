import React, { memo, useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigation from "./tab-navigation";
import Search from "../../entity/search";
import Filter from "../../entity/filter";
import { useDispatch } from "react-redux";
import { getAreaCodes } from "../../entity/app-shared/app-shared.reducer";

const RootStack = createStackNavigator()

const RootStackNavigation = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        // todo : 나중에 지울것
        dispatch(getAreaCodes())
    }, [])

    return (
        <NavigationContainer>
            <RootStack.Navigator mode={"modal"} headerMode={"none"}>
                <RootStack.Screen name={"Tap"} component={TabNavigation}/>
                <RootStack.Screen name={"Modal"} component={Search}/>
                <RootStack.Screen name={"Filter"} component={Filter}/>
            </RootStack.Navigator>
        </NavigationContainer>
    )
}

export default memo(RootStackNavigation)
