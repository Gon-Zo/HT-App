import React, { useEffect, useState } from "react";
import GestureRecognizer from "react-native-swipe-gestures";
import { Button, Modal, Picker, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { H1 } from "../../shared/component/component";
import { areaCodes } from "../../shared/utils/data.utils";
import DropDownPicker from 'react-native-dropdown-picker';

interface IFilterModalProps {
    isVisible: boolean
    toClose: () => void
}

type AreaCodeData = {
    id: number
    code: string,
    name: string,
    type: string,
    subAreaCodeList: Array<AreaCodeData>,
    createBy: string,
    createDate: string
}

const FilterModal = (props: IFilterModalProps) => {

    const {isVisible, toClose} = props

    const [tab, setTab] = useState<string | any>(null)
    const [isPickerOpen, setPickerOpen] = useState<boolean>(false);
    const [pickerValue, setPickerValue] = useState<string | any>(null);
    const [selectItems, setSelectItems] = useState<Array<any> | any>([]);
    const [isSubPickerOpen, setSubPickerOpen] = useState<boolean>(false);
    const [subPickerValue, setSubPickerValue] = useState<string | any>(null);
    const [subSelectItems, setSubSelectItems] = useState<Array<any> | any>([]);

    useEffect(() => {
        const selectItems = areaCodes.map(item => {
            return {
                label: item.name,
                value: item.code
            }
        })
        setSelectItems(selectItems)
        setTab('A')
    }, [])

    useEffect(() => {

        if (isVisible == false) {
            setTab('A')
            setPickerOpen(false)
            setPickerValue(null)
            setSelectItems([])
            setSubPickerOpen(false)
            setSubPickerValue(null)
            setSubSelectItems([])
            return
        }

        return () => {
        }

    }, [isVisible])

    const toChangePickerValue = (value: any) => {

        const foundCode: AreaCodeData = {
            ...areaCodes.find(item => item.code == value),
            id: 0,
            code: '',
            name: '',
            type: '',
            subAreaCodeList: [],
            createBy: '',
            createDate: ''
        }

        // @ts-ignore
        const foundSubCodeList = foundCode.subAreaCodeList

        if (typeof foundSubCodeList === "undefined" || foundSubCodeList == null) {
            return;
        }

        const subSelectItems = foundSubCodeList
            .map((item: any) => {
                return {
                    label: item.name,
                    value: item.code
                }
            })

        setSubPickerOpen(false)
        setSubSelectItems(subSelectItems)
        setSubPickerValue('')
    }

    const areaPicker = () => {
        return (
            <>
                <View style={[styles.areaPickerWrap, styles.mainPickerWrap]}>
                    <Text style={styles.pickerLabel}>지역 (대분류)</Text>
                    <DropDownPicker
                        open={isPickerOpen}
                        value={pickerValue}
                        items={selectItems}
                        onChangeValue={toChangePickerValue}
                        setOpen={setPickerOpen}
                        setValue={setPickerValue}
                        setItems={setSelectItems}/>
                </View>
                <View style={[styles.areaPickerWrap, styles.subPickerWrap]}>
                    <Text style={styles.pickerLabel}>지역 (소분류)</Text>
                    <DropDownPicker
                        open={isSubPickerOpen}
                        value={subPickerValue}
                        items={subSelectItems}
                        setOpen={setSubPickerOpen}
                        setValue={setSubPickerValue}
                        setItems={setSubSelectItems}/>
                </View>
            </>
        )
    }

    const datePicker = () => {
        return (
            <Text>datePicker</Text>
        )
    }

    const renderFilterContent = (): any | React.ReactNode => {
        return (
            <View style={{
                flex: 1
            }}>
                {
                    (tab == 'A' ? areaPicker() : (tab == 'B' ? datePicker() : null))
                }
            </View>
        )
    }

    const toPressTab = React.useCallback((event: any) => {
        console.log(">>>>>>>>>>>>>.....", event._targetInst.memoizedProps.children)
        const tabValue = event._targetInst.memoizedProps.children[0][0].props.children
        console.log(">>>>>>>>>>>>>.tableName" , tabValue)
        setTab('A')
        setPickerOpen(false)
    }, [tab])

    const toRenderTab = () => {

        const toRenderItems = (title : string) => {
            return (
                <View style={{flex: 1, backgroundColor: "#f00", alignItems: 'center', justifyContent: 'center'}}>
                    <TouchableOpacity onPress={toPressTab} style={
                        {
                            backgroundColor: "#00f",
                            width: "80%",
                            height: "80%",
                            alignItems: 'center',
                            justifyContent: 'center'
                        }
                    }>
                        <Text style={[{
                            fontSize: 17,
                            marginBottom: 5,
                        }, tab == title && {color: '#fff'}]}>
                            {title}
                        </Text>
                        {
                            tab == title && (
                                <View style={{
                                    width: '50%',
                                    height: 3,
                                    backgroundColor: "#fff"
                                }}/>
                            )
                        }
                    </TouchableOpacity>
                </View>
            )
        }

        return (
            <View style={{
                flexDirection: 'row',
                flex: .15
            }}>
                {toRenderItems('지역')}
                {toRenderItems('날짜')}
                {toRenderItems('종류')}
            </View>
        )
    }

    return (
        <GestureRecognizer onSwipeDown={toClose}>
            <Modal
                animationType={'slide'}
                visible={isVisible}
                transparent={true}>

                <View style={styles.modalWrap}>

                    <TouchableOpacity style={styles.modalBg} onPress={toClose}/>
                    <View style={styles.modalContent}>
                        <H1 text={'필터'}/>
                        {toRenderTab()}
                        {renderFilterContent()}

                        <View style={{
                            flex: .2,
                            backgroundColor: "#f00"
                        }}>
                            <Button title={'test'} onPress={() => {
                            }}/>
                        </View>

                    </View>

                </View>

            </Modal>

        </GestureRecognizer>
    )
}

const styles = StyleSheet.create({
    modalWrap: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,.1)"
    },
    modalBg: {
        flex: .5
    },
    modalContent: {
        flex: 1,
        backgroundColor: "#fff",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20
    },
    areaPickerWrap: {
        padding: 10,
    },
    mainPickerWrap: {
        zIndex: 4000
    },
    subPickerWrap: {
        zIndex: 3000
    },
    pickerLabel: {
        fontSize: 14,
        paddingBottom: 10
    }
})

export default FilterModal
