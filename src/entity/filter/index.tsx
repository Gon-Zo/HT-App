import React, { useState, useRef, useEffect } from 'react'
import {
    Text,
    View,
    SafeAreaView,
    StyleSheet,
    Alert,
    Pressable,
    TouchableOpacity,
    Button
} from "react-native";
// @ts-ignore
import { TagSelect } from 'react-native-tag-select';
import { arrOfPicker } from "./filter-data";
import { ISaveFilterDTO } from "../home/filter.interface";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { setByFilterValue } from "./filter.reducer";
import { IRootState } from "../../shared/reducer";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import DateModal, { DateModalState } from "../../shared/component/date-modal";

type FilterState = {
    startDate: string,
    endDate: string,
}

const Filter = (props: any) => {

    const dispatch = useDispatch()

    const {navigation} = props

    const tagRef = useRef()

    const [state, setState] = useState<FilterState>({startDate: '', endDate: ''})

    const [isDateModalAble, setDateModalAble] = useState(false)

    const {tagSelectValue, selectDate} = useSelector((state: IRootState) => {
        return {
            tagSelectValue: state.filter.tagSelectValue,
            selectDate: state.filter.selectDate
        }
    }, shallowEqual)

    useEffect(() => {

        const startDate = typeof selectDate.startDate === 'undefined' ? '' : selectDate.startDate

        const endDate = typeof selectDate.endDate === 'undefined' ? '' : selectDate.endDate

        const newState : FilterState = {
            ...state,
            startDate : startDate,
            endDate : endDate
        }

        setState(newState)

        return () => {
        }

    }, [dispatch])

    const toClose = () => {
        navigation.goBack()
    }

    const toApplyFilter = () => {

        if (state.startDate == '' || state.endDate == '') {
            Alert.alert("날짜가 아직 선택 되지 않았습니다.")
            return;
        }

        // @ts-ignore
        const _tagSelectValue = tagRef['current'].itemsSelected

        const isEmptyStateAbleByTag = _tagSelectValue.length == 0

        if (isEmptyStateAbleByTag) {
            Alert.alert("거래 유형을 선택해 주세요.")
            return;
        }

        const newPayload: ISaveFilterDTO = {
            tagSelectValue: _tagSelectValue,
            startDate: state.startDate,
            endDate: state.endDate
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

    const setDate = (modalState: DateModalState) => {

        const newState = {
            ...state,
            startDate: modalState.startDate,
            endDate: modalState.endDate
        }

        setState(newState)
    }

    const toToggleDateModal = () => setDateModalAble(prevState => !prevState)

    return (
        <SafeAreaView style={styles.viewWrap}>

            <View style={
                {
                    alignItems: "flex-end",
                    paddingRight: 10,
                }}>
                <TouchableOpacity onPress={toClose}>
                    <FontAwesomeIcon size={18} icon={["fas", "times"]}/>
                </TouchableOpacity>
            </View>

            <LayoutWrap title={"지역"}>

            </LayoutWrap>

            <LayoutWrap title={"날짜"}>

                <View style={styles.centeredView}>

                    <DateModal
                        setDate={setDate}
                        visible={isDateModalAble}
                        toClose={toToggleDateModal}/>

                    <Text>
                        startDate : {state.startDate},
                        endDate : {state.endDate}
                    </Text>

                    <Pressable
                        style={[styles.button, styles.buttonOpen]}
                        onPress={toToggleDateModal}>
                        <Text style={styles.textStyle}>
                            <FontAwesomeIcon size={20} icon={['fas', 'calendar']}/>
                            Show Modal</Text>
                    </Pressable>

                </View>
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
                <Button title={"적용"} onPress={toApplyFilter}/>
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

    centeredView: {
        flex: 1,
        justifyContent: "center",
        paddingTop: 20,
        // alignItems: "center",
        // marginTop: 22
    },

    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },

    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center"
    },

})

export default React.memo(Filter)
