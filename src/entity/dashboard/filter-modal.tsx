import React, { useEffect, useState } from "react";
import GestureRecognizer from "react-native-swipe-gestures";
import { Alert, Modal, Text, TouchableOpacity, View } from "react-native";
import { H1 } from "../../shared/component/component";
import { areaCodes, transactionType } from "../../shared/utils/data.utils";
import DropDownPicker from 'react-native-dropdown-picker';
import { CARD_COLOR } from "../../shared/utils/color.utils";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { Calendar } from "react-native-calendars";
import { styles } from "./dashboard.styles";
import { useDispatch } from "react-redux";
import { setByFilterData } from "./dashboard.reducer";
import { AreaCodeData, IFilterDate, IFilterModalProps, tabEnum } from "./dashboard.interface";
import { DATE_COLOR, getBySelectMarkers } from "./dashboard.service";

const FilterModal = (props: IFilterModalProps) => {

    const {region, isVisible, toClose, startDate, endDate} = props

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
    const [isMarkerAble, setMarkerAble] = useState(false)

    const dispatch = useDispatch()

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
            getBySelectMarkers(startDate, endDate, newMarkedDates)
        }

        const pickerValue = region.main.code

        const subPickerValue = typeof region.sub == "undefined" ? '' : region.sub.code

        setPickerValue(pickerValue)
        setSubPickerValue(subPickerValue)
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

        const subSelectItems = [{label: '선택안함', value: ''}]
            .concat(
                foundSubCodeList
                    .map((item: any) => {
                        return {
                            label: item.name,
                            value: item.code
                        }
                    })
            )

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
                          displayLoadingIndicator={true}
                          current={filterDate.startDate}
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
        const tabValue: string = tabEnum[tabKey]
        setTab(tabValue)
        setPickerOpen(false)
    }, [tab])

    const toRenderTab = () => {

        const toRenderItems = (title: string) => {

            // @ts-ignore
            const isActive = tabEnum[title] === tab

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

    const toSaveFilterData = () => {

        if (pickerValue == '') {
            Alert.alert("지역(대분류)를 선택 해주세요.")
            return
        }

        const foundCode = areaCodes.find(item => item.code == pickerValue)

        // @ts-ignore
        const pickerObj = subPickerValue === '' ? foundCode : foundCode.subAreaCodeList.find(item => item.code == subPickerValue)

        if (typeof pickerObj == 'undefined') {
            Alert.alert("지역을 선택해 주세요.")
            return;
        }

        const typeObj = transactionType.find(item => item.value == typeValue)

        if (typeof typeObj == 'undefined') {
            Alert.alert("거래 타입을 선택해주세요.")
            return;
        }

        if (filterDate.startDate == '' || filterDate.endDate == '') {
            Alert.alert("날짜를 선택해주세요.")
            return;
        }

        const filterData = {
            pickerObj,
            typeObj,
            filterDate,
            pickerData: foundCode,
            subData: subPickerValue === '' ? {} : pickerObj
        }

        dispatch(setByFilterData(filterData))

        Alert.alert("적용되었습니다.")
        toClose()
    }

    return (
        <GestureRecognizer onSwipeDown={toClose}>
            <Modal animationType={'slide'}
                   visible={isVisible}
                   transparent={true}>
                <View style={styles.modalWrap}>
                    <TouchableOpacity style={styles.modalBg} onPress={toClose}/>
                    <View style={styles.modalContent}>
                        <H1 text={'필터'}/>
                        {toRenderTab()}
                        {renderFilterContent()}
                        <View style={styles.btnWrap}>
                            <TouchableOpacity
                                style={styles.saveBtn}
                                onPress={toSaveFilterData}>
                                <FontAwesomeIcon
                                    color={"#fff"}
                                    icon={['fas', "save"]}/>
                                <Text style={styles.btnText}>
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


export default FilterModal
