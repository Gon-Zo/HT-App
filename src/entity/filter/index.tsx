import React, { useState , useRef } from 'react'
import { Text, View, SafeAreaView, StyleSheet, Alert } from "react-native";
// @ts-ignore
import { TagSelect } from 'react-native-tag-select';
import { arrOfPicker } from "./filter-data";
import { Button } from "react-native-elements";

type FilterState = {
    transactionType: string,
    tag : any
}

const Filter = (props: any) => {

    const {navigation} = props

    const tagRef = useRef()

    const [state, setState] = useState<FilterState>({
        transactionType: '01',
        tag : null
    })

    const toValueChange = (itemValue: any, itemIndex: any) => {
        const newState: FilterState = {
            ...state,
            transactionType: itemValue
        }
        setState(newState)
    }

    return (
        <SafeAreaView style={styles.viewWrap}>

            <View style={{flex: 1, backgroundColor: "darkorange"}}>

            </View>

            <View style={{flex: .5}}>

                <Text style={{fontSize: 25, fontWeight: "bold", marginLeft: 10}}>
                    거래 유형
                </Text>

                <View style={{
                    flexDirection : 'column'
                }}>

                    <TagSelect
                        data={arrOfPicker}
                        max={1}
                        ref={tagRef}
                        itemStyle={styles.item}
                        itemLabelStyle={styles.label}
                        itemStyleSelected={styles.itemSelected}
                        itemLabelStyleSelected={styles.labelSelected}
                    />

                </View>

            </View>

            <View style={{flex: 1, backgroundColor: "green"}}>
                <Button title={"test"} onPress={()=>{
                    // @ts-ignore
                    console.log(">>>>>>>>>>." , tagRef.current.itemsSelected)
                }}/>
            </View>

            {/*<View style={{flex: .17, backgroundColor: "red"}}>*/}
            {/*    <Button title="적용"/>*/}
            {/*</View>*/}
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    viewWrap: {
        flex: 1,
        backgroundColor: "tomato",
        flexDirection: "column"
    },
    viewMargin: {
        margin: 10
    },
    labelText: {
        color: '#333',
        fontSize: 15,
        fontWeight: '500',
        marginBottom: 15,
    },
    item: {
        borderWidth: 1,
        borderColor: '#333',
        backgroundColor: '#FFF',
    },
    label: {
        color: '#333'
    },
    itemSelected: {
        backgroundColor: '#333',
    },
    labelSelected: {
        color: '#FFF',
    },
})

export default React.memo(Filter)
