import React, { useEffect, useState } from "react";
import ExModal, { IExModalProps } from "./ex-modal";
import { Calendar } from "react-native-calendars";
import { Pressable, View } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { IFilterDate } from "../../entity/home/filter.interface";
import { DATE_COLOR, getBySelectMarkers } from "../../entity/filter/filter.service";

interface IDateModalProps extends IExModalProps {
    setDate: (payload: DateModalState) => void
    selectData: IFilterDate
}

export type DateModalState = {
    startDate: any,
    endDate: any,
    markedDates: any
}

const DateModal = (props: IDateModalProps) => {

    const {visible, toClose, setDate, selectData} = props

    const [state, setState] = useState<DateModalState>({
        startDate: '',
        endDate: '',
        markedDates: {}
    })

    const toReset = () => {

        const newState = {
            startDate: '',
            endDate: '',
            markedDates: {}
        }

        setState(newState)
    }

    const onClose = () => {
        toReset()
        toClose()
    }

    const toSave = () => {
        setDate(state)
        toClose()
    }

    useEffect(() => {

        if (visible && selectData.startDate !== "" && selectData.endDate !== "") {

            const startDate = selectData.startDate;

            const endDate = selectData.endDate;

            const markedDates: any = {}

            if (selectData.startDate == selectData.endDate) {
                markedDates[startDate] = DATE_COLOR['DEFAULT_DATE']
            } else {
                getBySelectMarkers(startDate, endDate, markedDates)
            }

            const newState = {
                ...state,
                startDate,
                endDate,
                markedDates
            }

            setState(newState)
        }

    }, [visible])

    return (
        <ExModal visible={visible} toClose={onClose}>
            <Calendar
                markingType={'period'}
                markedDates={state.markedDates}
                onDayPress={(payload: any) => {

                    const dateString = payload['dateString']

                    const isSelect = state.startDate !== "" && state.endDate !== ""

                    let markedDates: any = {}

                    let newState: any = {}

                    if (isSelect) {

                        const anyOfStartDate = DATE_COLOR['START_DATE']

                        markedDates[dateString] = anyOfStartDate

                        newState = {
                            ...state,
                            startDate: dateString,
                            endDate: '',
                            markedDates: markedDates,
                        }

                    } else {

                        getBySelectMarkers(state.startDate, dateString, markedDates)

                        newState = {
                            ...state,
                            markedDates: markedDates,
                            endDate: dateString
                        }
                    }

                    setState(newState)

                    // const isStart = state.startDate === '' && state.endDate === ''
                    //
                    // const isAdd = state.startDate !== '' && state.endDate !== ''
                    //
                    //
                    // if (isStart && !isAdd) {
                    //
                    //     const anyOfStartDate = DATE_COLOR['START_DATE']
                    //
                    //     markedDates[dateString] = anyOfStartDate
                    //
                    //     newState = {
                    //         ...state,
                    //         startDate: dateString,
                    //         markedDates: markedDates,
                    //     }
                    //
                    // } else if (!isStart && isAdd) {
                    //
                    //     const startDate = state.startDate
                    //
                    //     const endDate = state.endDate
                    //
                    //     const startNum = toDistanceByDate(startDate, dateString)
                    //
                    //     const endNum = toDistanceByDate(dateString, endDate)
                    //
                    //     if (startNum < endNum) {
                    //
                    //         getBySelectMarkers(dateString, endDate, markedDates);
                    //
                    //         newState = {
                    //             ...state,
                    //             startDate: dateString,
                    //             markedDates: markedDates
                    //         }
                    //
                    //     } else if (startNum > endNum) {
                    //
                    //         getBySelectMarkers(startDate, dateString, markedDates)
                    //
                    //         newState = {
                    //             ...state,
                    //             endDate: dateString,
                    //             markedDates: markedDates
                    //         }
                    //
                    //     } else {
                    //
                    //     }
                    //
                    // } else {
                    //
                    //     getBySelectMarkers(state.startDate, dateString, markedDates)
                    //
                    //     newState = {
                    //         ...state,
                    //         markedDates: markedDates,
                    //         endDate: dateString
                    //     }
                    // }
                    //
                    // setState(newState)
                }}
            />
            <View style={{
                flexDirection: 'row',
                justifyContent: "flex-end"
            }}>
                <Pressable
                    style={{
                        borderRadius: 20,
                        padding: 10,
                        elevation: 2,
                        backgroundColor: "#c9c9c9",
                        marginRight: 10
                    }}
                    onPress={toReset}>
                    <FontAwesomeIcon color={'#fff'} icon={['fas', 'trash']}/>
                </Pressable>
                <Pressable
                    style={{
                        borderRadius: 20,
                        padding: 10,
                        elevation: 2,
                        backgroundColor: '#fa8072',
                    }}
                    onPress={toSave}>
                    <FontAwesomeIcon color={'#fff'} icon={['fas', 'save']}/>
                </Pressable>
            </View>
        </ExModal>
    )
}


export default DateModal
