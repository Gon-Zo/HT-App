import React, {memo, useEffect} from 'react'
import {useSelector, shallowEqual, useDispatch} from 'react-redux'
import {Button, SafeAreaView, StatusBar, Text, View} from "react-native";
import {IRootState} from "../../shared/reducer";
import {onDownNumber, onUpNumber, setNumber} from "./count.reducer";

const Count = (props: any) => {

    const dispatch = useDispatch()

    const {number} = useSelector(({count}: IRootState) => {
        return {
            number: count.number.data
        }
    }, shallowEqual)

    const onUp = () => dispatch(onUpNumber())

    const onDown = () => dispatch(onDownNumber())

    useEffect(() => {
        dispatch(setNumber(0))
    }, [])

    return (
        <React.Fragment>
            <StatusBar barStyle={"dark-content"}/>
            <SafeAreaView>
                <View>
                    <Text>Count</Text>
                    <Button title={"-"} onPress={onDown}/>
                    <Text>{number}</Text>
                    <Button title={"+"} onPress={onUp}/>
                </View>
            </SafeAreaView>
        </React.Fragment>
    )
}


export default memo(Count)
