import React, { useState, useRef, useEffect } from 'react'
import { Text, View, SafeAreaView, StyleSheet, Alert } from "react-native";
// @ts-ignore
import { TagSelect } from 'react-native-tag-select';
import { arrOfPicker } from "./filter-data";
import { Button, Icon } from "react-native-elements";
import { ISaveFilterDTO } from "../home/filter.interface";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { setByFilterValue } from "./filter.reducer";
import { IRootState } from "../../shared/reducer";

const Filter = (props: any) => {

    const {navigation} = props

    const dispatch = useDispatch()

    const tagRef = useRef()

    const toClose = () => {
        navigation.goBack()
    }

    const {tagSelectValue} = useSelector((state: IRootState) => {
        return {
            tagSelectValue: state.filter.tagSelectValue
        }
    }, shallowEqual)

    const toApplyFilter = () => {

        // @ts-ignore
        const _tagSelectValue = tagRef['current'].itemsSelected

        const isEmptyStateAbleByTag = _tagSelectValue.length == 0

        if (isEmptyStateAbleByTag) {
            Alert.alert("거래 유형을 선택해 주세요.")
            return;
        }

        const newPayload: ISaveFilterDTO = {
            tagSelectValue: _tagSelectValue
        }

        dispatch(setByFilterValue(newPayload))
            // @ts-ignore
            .then((isStateAble: boolean) => {
                if (isStateAble) {
                    Alert.alert("적용 완료 되었습니다.")
                    toClose()
                }
            })

    }

    return (
        <SafeAreaView style={styles.viewWrap}>

            <View style={
                {
                    alignItems: "flex-end",
                    paddingRight: 10,
                }}>
                <Icon
                    size={25}
                    name='close'
                    type='material'
                    color='#000'
                    onPress={toClose}
                />
            </View>

            <LayoutWrap title={"지역"}>

            </LayoutWrap>

            <LayoutWrap title={"날짜"}>

            </LayoutWrap>

            <LayoutWrap title={"거래 유형"} flex={.5}>

                <View style={{
                    marginTop: 10,
                    marginLeft: 10
                }}>
                    <TagSelect
                        value={tagSelectValue}
                        data={arrOfPicker}
                        max={1}
                        theme={"warning"}
                        ref={tagRef}
                        onMaxError={() => {
                            return
                        }}
                        itemStyle={styles.item}
                        itemLabelStyle={styles.label}
                        itemStyleSelected={styles.itemSelected}
                        itemLabelStyleSelected={styles.labelSelected}
                    />
                </View>

            </LayoutWrap>

            <View style={{flex: .17, margin: 10}}>
                <Button title="적용"
                        type="outline"
                        onPress={toApplyFilter}/>
            </View>

        </SafeAreaView>
    )
}

const LayoutWrap = (props: any) => {

    const {children, title, flex} = props

    const [state, setState] = useState({
        flex: 1
    })

    useEffect(() => {

        const newState = {
            ...state,
            flex: typeof flex === "undefined" ? 1 : flex
        }

        setState(newState)
    }, [])

    return (
        <View style={{flex: state.flex}}>
            <Text style={{fontSize: 25, fontWeight: "bold", marginLeft: 10}}>
                {title}
            </Text>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    viewWrap: {
        flex: 1,
        backgroundColor: "#fffafa",
        flexDirection: "column"
    },
    viewMargin: {
        margin: 10
    },
    labelText: {
        color: '#fa8072',
        fontSize: 15,
        fontWeight: '500',
        marginBottom: 15,
    },
    item: {
        borderWidth: 1,
        borderColor: '#fa8072',
        backgroundColor: '#FFF',
    },
    label: {
        color: '#fa8072'
    },
    itemSelected: {
        backgroundColor: '#ff6347',
    },
    labelSelected: {
        color: '#fff',
    },
})

export default React.memo(Filter)
