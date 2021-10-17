import React, { useEffect, useState } from "react";
import GestureRecognizer from "react-native-swipe-gestures";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { H1 } from "../../shared/component/component";
import { areaCodes } from "../../shared/utils/data.utils";
import DropDownPicker from 'react-native-dropdown-picker';
import { CARD_COLOR } from "../../shared/utils/color.utils";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'


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

const tabValues = {
    '지역': 'A',
    '날짜': 'B',
    '종류': 'C'
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
            id: 0,
            code: '',
            name: '',
            type: '',
            subAreaCodeList: [],
            createBy: '',
            createDate: '',
            ...areaCodes.find(item => item.code == value)
        }

        // @ts-ignore
        const foundSubCodeList = foundCode.subAreaCodeList

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

    const typePicker = () => {
        return (
            <Text>TEST</Text>
        )
    }

    const renderFilterContent = (): any | React.ReactNode => {
        return (
            <View style={{
                flex: 1
            }}>
                {
                    (tab == 'A' ? areaPicker() : (tab == 'B' ? datePicker() : typePicker()))
                }
            </View>
        )
    }

    const toPressTab = React.useCallback((event: any) => {
        const tabKey = event._targetInst.memoizedProps.children[0][0].props.children
        // @ts-ignore
        const tabValue: string = tabValues[tabKey]
        setTab(tabValue)
        setPickerOpen(false)
    }, [tab])

    const toRenderTab = () => {

        const toRenderItems = (title: string) => {

            // @ts-ignore
            const isActive = tabValues[title] === tab

            return (
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <TouchableOpacity onPress={toPressTab} style={
                        {
                            width: "80%",
                            height: "80%",
                            alignItems: 'center',
                            justifyContent: 'center'
                        }
                    }>
                        <Text style={[{
                            fontSize: 17,
                            marginBottom: 5,
                            color: '#c9c9c9'
                        }, isActive && {color: CARD_COLOR[1]}]}>
                            {title}
                        </Text>
                        {
                            isActive && (
                                <View style={{
                                    width: '50%',
                                    height: 3,
                                    backgroundColor: CARD_COLOR[1]
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
                            justifyContent: 'center',
                            alignItems: 'center',
                            // backgroundColor: "#f00"
                        }}>
                            <TouchableOpacity style={{
                                backgroundColor: CARD_COLOR[1],
                                width: '100%',
                                height: "50%",
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'row'
                            }}>
                                <FontAwesomeIcon
                                    color={"#fff"}
                                    icon={['fas', "save"]}/>
                                <Text style={{
                                    color: "#fff",
                                    fontWeight: '800',
                                    marginLeft : 10
                                }}>
                                    적용
                                </Text>
                            </TouchableOpacity>
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
