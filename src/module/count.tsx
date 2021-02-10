import React, {useEffect} from "react"
// @ts-ignore
import {useSelector, useDispatch} from 'react-redux'
import {Button, SafeAreaView, StatusBar, Text, View} from "react-native";
import {IRootState} from "../shared/reducer";
import {downByNumber, initByNumber, upByNumber} from "./count.reducer";

const Count = () => {

    const dispatch = useDispatch()

    const {num} = useSelector((state: IRootState) => {
        return {
            num: state.count.number.data
        }
    })

    useEffect(()=>{
        _initByNumber()
    },[])

    const _upByNumber = () =>{
        dispatch(upByNumber())
    }

    const _downByNumber = () =>{
        dispatch(downByNumber())
    }

    const _initByNumber = () =>{
        dispatch(initByNumber())
    }

    return (
        <React.Fragment>
            <StatusBar barStyle={"dark-content"}/>
            <SafeAreaView>
                <View>
                    <Text>TEST</Text>
                    <Text>Value : {num}</Text>
                    <Button title={"+"} onPress={_upByNumber}/>
                    <Button title={"-"} onPress={_downByNumber}/>
                    <Button title={"reset"} onPress={_initByNumber}/>
                </View>
            </SafeAreaView>
        </React.Fragment>
    )
}

export default Count
