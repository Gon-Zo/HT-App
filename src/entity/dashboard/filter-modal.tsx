import React, { useEffect, useState } from "react";
import GestureRecognizer from "react-native-swipe-gestures";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { H1 } from "../../shared/component/component";
import { areaCodes, transactionType } from "../../shared/utils/data.utils";
import DropDownPicker from 'react-native-dropdown-picker';
import { CARD_COLOR } from "../../shared/utils/color.utils";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { Calendar } from "react-native-calendars";
import { DATE_COLOR, getBySelectMarkers } from "../filter/filter.service";
import { IFilterDate } from "../filter/filter.interface";


interface IFilterModalProps {
    isVisible: boolean
    toClose: () => void,
    startDate: string,
    endDate: string
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
    '거래': 'C'
}

const FilterModal = (props: IFilterModalProps) => {

    const {isVisible, toClose, startDate, endDate} = props

    const [tab, setTab] = useState<string | any>(null)
    const [isPickerOpen, setPickerOpen] = useState<boolean>(false);
    const [pickerValue, setPickerValue] = useState<string | any>(null);
    const [selectItems, setSelectItems] = useState<Array<any> | any>([]);
    const [isSubPickerOpen, setSubPickerOpen] = useState<boolean>(false);
    const [subPickerValue, setSubPickerValue] = useState<string | any>(null);
    const [subSelectItems, setSubSelectItems] = useState<Array<any> | any>([]);
    const [transactionTypes, setTransactionTypes] = useState<Array<any> | any>([])
    const [typeValue, setTypeValue] = useState<string | any>(null)
    const [markedDates, setMarkedDates] = useState({})
    const [filterDate, setFilterDate] = useState<IFilterDate>({startDate: '', endDate: ''})

    useEffect(() => {
        const selectItems = areaCodes.map(item => {
            return {
                label: item.name,
                value: item.code
            }
        })
        setSelectItems(selectItems)
        setTransactionTypes(transactionType)
        setTab('A')
    }, [])

    useEffect(() => {

        if (isVisible == false) {
            setPickerOpen(false)
            setPickerValue(null)
            setSubPickerOpen(false)
            setSubPickerValue(null)
            setSubSelectItems([])
            return
        }


        const newMarkedDates: any = {}

        if (startDate == endDate) {
            newMarkedDates[startDate] = DATE_COLOR['DEFAULT_DATE']
        } else {
            getBySelectMarkers(startDate, endDate, markedDates)
        }

        setFilterDate({startDate: startDate, endDate: endDate})
        setMarkedDates(newMarkedDates)

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

        const toDayPress = (payload: any) => {

            const dateString = payload['dateString']

            const isSelect = filterDate.startDate !== "" && filterDate.endDate !== ""

            let markedDates: any = {}

            let nowFilterDate: any = {}

            if (isSelect) {
                const anyOfStartDate = DATE_COLOR['START_DATE']
                markedDates[dateString] = anyOfStartDate
                nowFilterDate = {
                    startDate: dateString,
                    endDate: ''
                }
            } else {
                getBySelectMarkers(filterDate.startDate, dateString, markedDates)
                nowFilterDate = {
                    ...filterDate,
                    endDate: dateString
                }
            }

            setFilterDate(nowFilterDate)
            setMarkedDates(markedDates)
        }

        return (
            <>
                <Calendar markingType={'period'}
                    markedDates={markedDates}
                    onDayPress={toDayPress}/>
            </>
        )
    }

    const typePicker = () => {

        const toRenderItem = (type: any, index: number) => {

            const isActiveAble = typeValue == type.value

            const toPress = () => {
                setTypeValue(type.value)
            }

            return (
                <TouchableOpacity key={index}
                                  activeOpacity={1}
                                  style={styles.tagBox}
                                  onPress={toPress}>
                    <View style={[
                        styles.tagContentBox, isActiveAble &&
                        {
                            borderColor: CARD_COLOR[1],
                            backgroundColor: CARD_COLOR[1]
                        }
                    ]}>
                        <Text style={[{
                            color: "#c9c9c9"
                        }, isActiveAble && {color: '#fff'}]}>{type.label}</Text>
                    </View>
                </TouchableOpacity>
            )
        }

        return (
            <>
                <Text style={styles.pickerLabel}>거래 종류</Text>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    padding: 20
                }}>
                    {
                        transactionTypes.map(toRenderItem)
                    }
                </View>
            </>
        )
    }

    const renderFilterContent = (): any | React.ReactNode => {
        return (
            <View style={styles.modalContentWrap}>
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
                <View style={styles.tabWrap}>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={toPressTab}
                        style={styles.tabBox}>
                        <Text style={[styles.tabTitle, isActive && styles.tabTitleOn]}>
                            {title}
                        </Text>
                        {isActive && <View style={styles.tabTitleLine}/>}
                    </TouchableOpacity>
                </View>
            )
        }

        return (
            <View style={styles.tabViewWrap}>
                {toRenderItems('지역')}
                {toRenderItems('날짜')}
                {toRenderItems('거래')}
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
                                    marginLeft: 10
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
    modalContentWrap: {
        flex: 1
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
    },
    tabViewWrap: {
        flexDirection: 'row',
        flex: .15
    },
    tabWrap: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tabBox: {
        width: "80%",
        height: "80%",
        alignItems: 'center',
        justifyContent: 'center'
    },
    tabTitle: {
        fontSize: 17,
        marginBottom: 5,
        color: '#c9c9c9'
    },
    tabTitleOn: {
        color: CARD_COLOR[1],
        fontWeight: '800'
    },
    tabTitleLine: {
        width: '50%',
        height: 3,
        backgroundColor: CARD_COLOR[1]
    },
    tagBox: {
        marginLeft: 4,
        marginRight: 4,
        marginBottom: 8
    },
    tagContentBox: {
        flexDirection: 'row',
        borderRadius: 10,
        borderColor: "#c9c9c9",
        borderWidth: 1,
        height: 46,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 16,
        paddingRight: 16
    },
    tagContentBoxOn: {
        borderColor: CARD_COLOR[1],
        backgroundColor: CARD_COLOR[1]
    }


})

export default FilterModal
